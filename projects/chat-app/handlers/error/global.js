function globalErrorHandler(err, _req, res, _next) {
  if (err.status) {
    // return res.status(err.status).send({ message: err.message });
    return res.render('error', {
      title: err.message,
      message: err.message,
    });
  } else {
    // return res
    //   .status(500)
    //   .send({ message: 'Something went wrong on the server!' });
    return res.render('error', {
      title: 'Server error',
      message: 'Something went wrong on the server!',
    });
  }
}

module.exports = globalErrorHandler;
