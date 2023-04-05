// require packages
const mongoose = require('mongoose');

const connectDB = (uri) => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('db is connected'))
    .catch((err) => console.log(err));
};

module.exports = {
  connectDB,
};
