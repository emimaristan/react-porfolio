require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const skillsRoutes = require("./routes/skillsRoutes");
const educationRoutes = require("./routes/educationRoutes");

const BaseURL = "/api";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Allows us to accept the data in JSON format
app.use(express.json());

app.use(`${BaseURL}/skills`, skillsRoutes);
app.use(`${BaseURL}/education`, educationRoutes);

app.listen(3000, "127.0.0.1", () => {
  console.log("Server started at ${3000}");
});
