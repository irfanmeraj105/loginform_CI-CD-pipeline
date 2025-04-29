const mongoose = require("mongoose");

const mongo_URL = process.env.MONGO_CONNECTION;

mongoose
  .connect(mongo_URL)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log("mongodb connection error:", err);
  });
