const mongoose = require('mongoose');

exports.connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connection: ${connection.connection.host}`);
  } catch (error) {
    process.exit(1);
  }
};
