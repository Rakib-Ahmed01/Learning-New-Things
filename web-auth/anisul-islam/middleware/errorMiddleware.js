const notFoundMiddleware = (req, res, next) => {
  const error = new Error('404 Not Found');
  error.status = 404;
  next(error);
};

const globalErrorMiddleware = (err, req, res, next) => {
  const status = err.status ? err.status : 500;

  return res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
  });
};

module.exports = {
  notFoundMiddleware,
  globalErrorMiddleware,
};
