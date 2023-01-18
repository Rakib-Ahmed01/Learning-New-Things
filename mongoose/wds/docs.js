const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

async function main() {
  await mongoose.connect('mongodb://localhost:27017');

  const kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? `My name is ${this.name}.`
      : `I don't have name.`;
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence', age: 2 });
  silence.speak();

  // const result = await silence.save();
  // console.log({ result });

  const meow = new Kitten({ name: 'Meow' });
  meow.save();

  const kittens = await Kitten.find();

  console.log({ kittens });
}

main().catch((err) => console.error(err));
