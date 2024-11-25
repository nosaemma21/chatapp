const mongoose = require("mongoose");

const dbconnect = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB ❤️");
  } catch (err) {
    console.log(
      "Error connecting to mongodb",
      process.env.PORT,
      process.env.MONG0_URI,
      process.env.JWT_SECRET
    );
  }
};

module.exports = dbconnect;
