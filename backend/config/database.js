const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('✅ Database connected successfully');
    })
    .catch((error) => {
      console.error('❌ Error while connecting to the Database');
      console.error(error);
      process.exit(1);
    });
};
