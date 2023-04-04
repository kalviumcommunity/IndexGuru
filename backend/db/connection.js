const mongoose = require("mongoose");
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    family: 4,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });
