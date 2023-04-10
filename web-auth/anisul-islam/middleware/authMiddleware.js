const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader =
    req.headers['Authorization'] || req.headers['authorization'];
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized Access!' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err.name === 'TokenExpiredError') {
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken) {
        return res.status(401).json({ message: 'Unauthorized Access!' });
      }
    }
    req.payload = decoded;
    next();
  });
};

const checkAccessTokenExpiration = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(' ')[1];

  if (!accessToken) {
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized Access!' });
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
          return res
            .status(401)
            .json({ success: false, message: 'Unauthorized Access!' });
        }

        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err, decoded) => {
            if (err) {
              return res
                .status(403)
                .json({ success: false, message: 'Forbidden Access!' });
            }

            const newAccessToken = jwt.sign(
              { name: decoded.name, email: decoded.email },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '15m' }
            );

            res.setHeader('Authorization', `Bearer ${newAccessToken}`);

            return next();
          }
        );
      } else {
        return res
          .status(403)
          .json({ success: false, message: 'Forbidden Access!' });
      }
    } else {
      return next();
    }
  });
};

module.exports = {
  verifyJWT,
};
