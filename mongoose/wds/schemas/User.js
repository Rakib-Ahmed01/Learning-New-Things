const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  country: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 18,
    max: 45,
  },
  email: {
    type: String,
    required: true,
    uppercase: true,
  },
  createdAt: { type: Date, default: new Date(), immutable: true },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});

module.exports = mongoose.model('User', userSchema);
