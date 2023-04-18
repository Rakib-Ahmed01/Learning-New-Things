const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const {
  generateRefreshAndAccesstoken,
} = require('../utils/generateRefreshAndAccessTokens');

exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'email password are required',
    });
  }

  if (password?.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'wrong password',
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'user not found',
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({
      success: false,
      message: 'wrong password',
    });
  }

  const { accessToken, refreshToken } = generateRefreshAndAccesstoken({
    email: user.email,
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.json({
    success: true,
    message: 'logged in successfully',
    data: {
      name: user.name,
      email: user.email,
      accessToken,
    },
  });
};

exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      error: 'name email password are required',
    });
  }

  if (password?.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'password must be at least 6 characters',
    });
  }

  const duplicateUser = await User.findOne({ email: email });

  if (duplicateUser) {
    return res.status(400).json({
      success: false,
      message: `user already exists with the email ${email}`,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword });

  res.status(200).json({ success: true, message: 'User created successfully' });
};

exports.refreshTokenController = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    const { accessToken, refreshToken } = generateRefreshAndAccesstoken({
      email: decoded.email,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'something went wrong',
      });
    }

    res.json({
      success: true,
      message: 'new access token',
      data: {
        name: user.name,
        email: user.email,
        accessToken,
      },
    });
  });
};

exports.logoutController = async (req, res) => {
  console.log('logout controller');
  res.clearCookie('refreshToken');
  res.status(200).json({ success: true, message: 'logged out successfully' });
};
