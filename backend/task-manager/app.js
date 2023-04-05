require('dotenv').config();
require('./db/connect');
const express = require('express');
const { connectDB } = require('./db/connect');
const {
  notFoundErrorHandler,
  globalErrorHandler,
} = require('./middlewares/errorMiddleware');
const { taskRouter } = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.static('./public'));

// routes
app.use('/api/v1/tasks', taskRouter);

// error handlers
app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => console.log(`app listening on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
