const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/IndexGuru", {
    useNewUrlParser: true,
    family: 4,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });
