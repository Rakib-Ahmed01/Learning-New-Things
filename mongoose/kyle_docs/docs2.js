const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const uri = 'mongodb://127.0.0.1:27017/test';

async function main() {
  await mongoose.connect(uri);

  const kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  kittySchema.methods.speak = function () {
    const name = this.name ? `My name is ${this.name}` : `I don't have name`;
    console.log(name);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const meow = new Kitten({
    name: 'Meow',
    age: 2,
  });
  // await meow.save();
  const kittens = await Kitten.find();
  console.log(kittens);
}

main().catch((err) => console.log(err));
