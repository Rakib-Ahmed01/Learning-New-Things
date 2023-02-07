require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {
  notFoundHandler,
  globalErrorHandler,
} = require('./middlewares/common/errorHandler');
const { inboxRouter } = require('./routers/inboxRouter');
const { loginRouter } = require('./routers/loginRouter');
const { usersRouter } = require('./routers/usersRouter');

// app initialization
const app = express();
const port = process.env.PORT || 5000;

// database connection
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DB_URI_STRING)
  .then(console.log('connected!'))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static/public folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routes setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// error handling
// 404 error handling
app.use(notFoundHandler);
// global error handling
app.use(globalErrorHandler);

app.listen(port, console.log('app is listening on port', +port));
