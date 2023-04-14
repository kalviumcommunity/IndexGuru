require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const Fund = require("./models/fundSchema");
const { find } = require("./models/fundSchema");
require("./db/connection");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.get("/apis/v1/funds", async (req, resp) => {
  try {
    const data = await Fund.find();

    if (!data) {
      resp.status(400).json({ error: "NO DATA FOUND" });
    } else {
      resp.status(200).json(data);
    }
  } catch (e) {
    resp.status(500).json({ error: e });
  }
});

app.post("/apis/v1/funds", async (req, resp) => {
  const fundsData = req.body;
  try {
    const funds = await Fund.insertMany(fundsData);
    if (!funds) {
      resp.send("Empty");
    } else {
      resp.status(200).json(funds);
    }
  } catch (e) {
    resp.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Connected to the db and Listening on PORT:${PORT}`);
});
