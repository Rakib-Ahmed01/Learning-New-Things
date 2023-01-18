const mongoose = require('mongoose');
const User = require('./schemas/User');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017');

async function run() {
  try {
    // const sabbir = new User({ name: 'Sabbir Vai', age: 20 });
    // await sabbir.save();
    // const rafin = await User.create({ name: 'Rafin', age: 11 });
    // rafin.name = 'Rafin Vai';
    // await rafin.save();
    const user = await User.create({
      name: 'Rakib Ahmed',
      age: 2,
      email: 'rakibahmed@gmail.com',
      hobbies: ['Programming', 'Solving Problem'],
      address: {
        country: 'Bangladesh',
        city: 'Kushtia',
      },
    });

    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

run();
