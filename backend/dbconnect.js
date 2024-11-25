const mongoose = require("mongoose");

const dbconnect = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongoDB ❤️");
  } catch (err) {
    console.log("Error connecting to mongodb", err.message);
  }
};

module.exports = dbconnect;
