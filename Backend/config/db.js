const mongoose = require("mongoose");

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      "mongodb+srv://Darkonda:<Thorin99>@reactgram.tk4xvxh.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;