const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: String,
  country: String,
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: {
      type: Number,
      max: [200, `You are probably dead.`],
      min: [10, `You are too small to ...`],
      required: true,
      validate: {
        validator: (value) => {
          console.log({ value });
          return value % 2 === 0;
        },
        message: (props) => `You must provide even age(${props.value}).`,
      },
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
  },
  { timestamps: true }
);

userSchema.methods.say = function (key = 'name') {
  const saying = this[key]
    ? `My ${key} is ${this[key]}`
    : `I don't have a ${key}`;
  console.log(saying, [key]);
};

userSchema.statics.findByName = function (name) {
  return this.find({ name: name });
};

userSchema.query.byName = function (name) {
  return this.where({ name: name });
};

userSchema.virtual('nameAndEmail').get(function () {
  return `${this.name} ${this.email}`;
});

userSchema.pre('save', function (next) {
  this.name = this.name + ' Edited';
  next();
});

userSchema.pre('save', function (next) {
  this.name = this.name.replace(' Edited', '');
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
