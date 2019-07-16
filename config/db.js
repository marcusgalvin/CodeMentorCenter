const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(chalk.green.inverse('MongoDB Connected!'));
  } catch (err) {
    console.error(err.messsage);
    process.exit(1);
  }
};

module.exports = connectDB;
