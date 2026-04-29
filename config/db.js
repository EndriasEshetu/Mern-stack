const mongoose = require("mongoose");
const getConfigValue = require("../utils/getConfigValue");

const db = getConfigValue("mongoURI", "MONGO_URI");

const connectDB = async () => {
  try {
    if (!db) {
      throw new Error(
        "MongoDB connection URI is missing. Set MONGO_URI in Render or provide mongoURI in config.",
      );
    }

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
