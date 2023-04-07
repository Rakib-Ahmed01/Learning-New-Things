// require packages
require('dotenv').config();
require('util').inspect.defaultOptions.depth = null;
require('express-async-errors');
const express = require('express');
const connectDB = require('./config/db');
const {
  notFoundErrorMiddleware,
  globalErrorMiddleware,
} = require('./middlewares/errorMiddleware');
const { productRouter } = require('./routes/productRoutes');

// initialize app
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
connectDB();

// routes
app.use('/api/v1/products', productRouter);

// error middlewares
app.use(notFoundErrorMiddleware);
app.use(globalErrorMiddleware);

// app listening
app.listen(port, () => console.log(`app listening at ${port}`));
