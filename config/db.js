const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    const connectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      family: 4,
      serverSelectionTimeoutMS: 10000,
    };

    const { useNewUrlParser, useCreateIndex, ...safeConnectionOptions } =
      connectionOptions;

    await mongoose.connect(db, safeConnectionOptions);
    console.log("MongoDB Connected....");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
