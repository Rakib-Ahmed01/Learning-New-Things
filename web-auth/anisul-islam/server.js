require('express-async-errors');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {
  notFoundMiddleware,
  globalErrorMiddleware,
} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const { authRoutes } = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// CONNECT TO DB
connectDB();

// ROUTES
app.use('/api/v1/auth', authRoutes);

// ERROR MIDDLEWARE
app.use(notFoundMiddleware);
app.use(globalErrorMiddleware);

app.listen(port, () => console.log(`app is listening on ${port}`));
