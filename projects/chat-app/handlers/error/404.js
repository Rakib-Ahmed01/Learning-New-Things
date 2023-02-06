function notFound(_req, _res, next) {
  const error = new Error('404 not found!');
  error.status = 404;
  next(error);
}

module.exports = notFound;
