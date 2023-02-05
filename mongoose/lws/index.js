const express = require('express');
const mongoose = require('mongoose');
const todosHandler = require('./Handlers/todosHandler');

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose.set('strictQuery', true);
mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(console.log('connected!'))
  .catch((err) => console.error(err.message));

// app routes
app.get('/', (_req, res) => {
  res.json({ message: 'Home Page!' });
});

app.use('/todos', todosHandler);

// 404 error construction
app.use((_req, _res, next) => {
  const error = new Error();
  error.status = 404;
  next(error);
});

// global error middleware
app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: '404 Not found!' });
  } else {
    return res.status(500).json({ messgae: 'Something went wrong!' });
  }
});

app.listen(3000, console.log('server is listening on port 3000'));
