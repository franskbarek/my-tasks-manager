const express = require("express");
const app = express();
const mongoose = require("mongoose");
const tasksRoute = require("./routes/tasks");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", true);
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongodb"))
  .catch((err) => console.log(console.log(err)));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/tasks", tasksRoute);

//handle ketika route tasks tidak memenuhi harapan
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry page cant find!");
});

app.listen(3000, () => console.log("Task manager API listening at http://localhost:3000"));
