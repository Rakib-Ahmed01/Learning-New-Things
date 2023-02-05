const express = require('express');
const adminRouter = require('./handlers/adminHandler');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Home Page' });
});

app.use('/admin', adminRouter);

app.use((req, res, next) => {
  const error = new Error('404 Not found!');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  } else {
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

app.listen(3000, console.log('server is listening on port 3000'));
