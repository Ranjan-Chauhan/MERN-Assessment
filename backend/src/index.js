const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./db/index");
const app = require("./app");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
    app.on("error", () => {
      console.log("app is not able to talk to database ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed!! ", err);
  });
