const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };
