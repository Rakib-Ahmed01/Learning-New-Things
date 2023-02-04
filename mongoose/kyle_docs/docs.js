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
    const greeting = this.name
      ? `My name is ${this.name}`
      : `i don't have name`;
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Fluffy', age: 2 });

  // await silence.save();

  const kitten = await Kitten.find({ name: /fluffy/gi });
  console.log(kitten);
}

main().catch((err) => console.log(err));
