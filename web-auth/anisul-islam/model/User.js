const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
  },
});

var encKey = process.env.ENCRYPTION_KEY;

userSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ['password'],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
