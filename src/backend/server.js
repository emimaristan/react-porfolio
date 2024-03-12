require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

//Allows us to accept the data in JSON format
app.use(express.json());

app.use("/api", routes);

app.listen(3000, "127.0.0.1", () => {
  console.log("Server started at ${3000}");
});
