require('express-async-errors');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {
  notFoundMiddleware,
  globalErrorMiddleware,
} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const { authRoutes } = require('./routes/authRoutes');
const { verifyJWT } = require('./middleware/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// CONNECT TO DB
connectDB();

// ROUTES
app.use('/api/v1/auth', authRoutes);

app.get('/api/v1/secret', verifyJWT, (req, res) => {
  const userInfo = req?.payload;
  res.json({
    message:
      'this is a secret route. you should not be here if you dont have access token. do you have any? --> I am joking you have access token.',
    yourInfo: userInfo,
  });
});

// ERROR MIDDLEWARE
app.use(notFoundMiddleware);
app.use(globalErrorMiddleware);

app.listen(port, () => console.log(`app is listening on ${port}`));
