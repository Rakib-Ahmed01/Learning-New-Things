// require packages
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const {
  notFoundErrorHandler,
  globalErrorHandler,
} = require('./middlewares/error.middleware');
const { connectDB } = require('./config/db.config');
const { authRoutes } = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const { verifyToken } = require('./middlewares/auth.middleware');

// initialize app
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());

// connect to db
connectDB();

// routes
app.use('/api/v1/auth', authRoutes);

app.get('/api/v1/protected', verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Protected access granted',
    data: 'Secret content!',
  });
});

// error middlewares
app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

// server listening
app.listen(port, () => console.log(`app listening on ${port}`));
