exports.notFoundErrorHandler = (req, res, next) => {
  const error = new Error('404 Not Found');
  error.status = 404;
  next(error);
};

exports.globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.status ? err.status : 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
  });
};
