const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  getAccessAndRefreshTokens,
} = require('../utils/getAccessAndRefreshTokens');

exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: 'email and password are required' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: `Can't find user with the email ${email}`,
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res
      .status(400)
      .json({ success: false, message: 'Incorrect password' });
  }

  const { accessToken, refreshToken } = getAccessAndRefreshTokens(user);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ success: true, data: user, accessToken });
};

exports.registerController = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({
      success: false,
      message: 'name, email and password are required',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'password must be at least 6 characters',
    });
  }

  const duplicate = await User.findOne({ email });

  if (duplicate) {
    return res.status(409).json({
      success: false,
      message: `User already exists with the email: ${email}`,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  res.status(200).json({ success: true, data: user });
};

exports.refreshTokenController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized Access!' });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: 'Forbidden Access!' });
    }

    const { accessToken, refreshToken } = getAccessAndRefreshTokens(decoded);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, accessToken, user: decoded });
  });
};

exports.logout = (req, res) => {
  res.clearCookie('refreshToken');
  res.status(200).json({ success: true, message: 'Successfully logged out' });
};
