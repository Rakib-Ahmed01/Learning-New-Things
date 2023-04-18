const jwt = require('jsonwebtoken');

exports.generateRefreshAndAccesstoken = ({ email }) => {
  const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  });

  const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  });

  return { accessToken, refreshToken };
};
