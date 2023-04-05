const notFoundErrorHandler = (req, res, next) => {
  const error = new Error('404 Not Found');
  error.status = 404;
  next(error);
};

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.status ? err.status : 500;

  return res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
  });
};

module.exports = { notFoundErrorHandler, globalErrorHandler };
