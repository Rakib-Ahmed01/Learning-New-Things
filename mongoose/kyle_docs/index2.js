const mongoose = require('mongoose');
const User = require('./schemas/User2');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/test');

async function main() {
  try {
    // const rakib = await User.create({
    //   name: 'Rakib Ahmed',
    //   age: 19,
    //   email: `rakibAHMED@gmail.com`,
    //   address: { city: 'Kushtia', country: 'Bangladesh' },
    //   hobbies: ['Coding'],
    // });
    // rakib.name = 'Rakib Ahmed';
    // await rakib.save();
    // console.log(rakib);
    // const user = await User.findOne({ name: 'Rakib Ahmed' });
    // console.log(user);
    // console.log(user.nameAndEmail);
    const user = await User.create({
      name: 'Rakib Ahmed',
      email: 'rakib@gmail.com',
      age: 22,
    });
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
}

main();

// how to save user
// 1. const rafin = new User({
//     name: 'Rafin',
//     age: 11,
//    });
//   await rafin.save();
// 2. const rakib = await User.create({ name: 'Rakib', age: 21 });
