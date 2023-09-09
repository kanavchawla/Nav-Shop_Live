const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://srivastavaaditya0522:aditya@user.iinwyp8.mongodb.net/"
  )
  .then(() => {
    console.log("done");
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/", require("./routes/login"));
app.use("/", require("./routes/Product"));

app.listen(5000);
