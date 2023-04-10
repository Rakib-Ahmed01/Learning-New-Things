exports.getAccessAndRefreshTokens = (user) => {
  const accessToken = jwt.sign(
    { name: user.name, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { name: user.name, email: user.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '30d' }
  );
  return { accessToken, refreshToken };
};
