require('dotenv').config();
const express = require('express');
const _ = require('lodash');
const cors = require('cors');
const mongoose = require('mongoose');
const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
} = require('./config/config');

console.log({
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
});

const app = express();
const port = process.env.PORT || 3000;

app.use([cors()]);

app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the server',
    last: _.first([0, 1, 2, 3, 4, 5]),
  });
});

const bookSchema = new mongoose.Schema({
  name: String,
});

const Book = mongoose.model('Book', bookSchema);

const mongoURL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoURL);
    // const book = await Book.create({ name: 'RABS' });
    console.log(await Book.find());
    console.log(`Database is connected ${connection.connection.host}`);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();
