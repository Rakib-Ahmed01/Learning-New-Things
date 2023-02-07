const createError = require('http-errors');

function notFoundHandler(req, res, next) {
  next(createError(404, '404 Not found!'));
}

function globalErrorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === 'development' ? err : { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    res.render('error', {
      title: 'Error Page',
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  globalErrorHandler,
};
