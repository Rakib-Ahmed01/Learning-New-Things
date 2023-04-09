const User = require('../model/User');
const bcrypt = require('bcrypt');

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

  res.status(200).json({ success: true, data: user });
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

  const hashedPassword = await bcrypt.hash(password, 10);

  const duplicate = await User.findOne({ email });

  if (duplicate) {
    return res.status(400).json({
      success: false,
      message: `User already exists with the email: ${email}`,
    });
  }

  const user = await User.create({ name, email, password: hashedPassword });

  res.status(200).json({ success: true, data: user });
};
