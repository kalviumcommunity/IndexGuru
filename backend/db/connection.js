const mongoose = require("mongoose");
const db = process.env.db;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    family: 4,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });
