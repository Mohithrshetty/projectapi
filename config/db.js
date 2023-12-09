const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://mohithrshetty03:nalini@cluster0.npm0jox.mongodb.net/login?retryWrites=true&w=majority")
  .then((response) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });