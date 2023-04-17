const jwt = require('jsonwebtoken');

exports.generateRefreshAndAccesstoken = ({ name, email }) => {
  const accessToken = jwt.sign(
    { name, email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { name, email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '30d' }
  );

  return { accessToken, refreshToken };
};
