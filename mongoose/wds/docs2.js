const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017');

async function main() {
  try {
    const kittySchema = new mongoose.Schema({
      name: String,
      age: String,
    });

    kittySchema.methods.speak = function speak() {
      const sayName = this.name
        ? `My name is ${this.name}.`
        : `I don't have name.`;
      console.log(sayName);
    };

    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten({
      name: 'Silence',
      age: 2,
    });

    console.log(silence);
    silence.speak();
  } catch (err) {
    console.log(err);
  }
}

main();
