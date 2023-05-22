require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const Fund = require("./models/fundSchema");
require("./db/connection");
const CronJob = require('cron').CronJob;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const corsOptions = {
  origin: ['http://localhost:3000', 'https://indexguru.netlify.app/'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


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

app.delete("/apis/v1/funds", async (req, resp) => {
  try {
    const deletedFunds = await Fund.deleteMany();
    if (!deletedFunds) {
      resp.status(400).json({ error: "NO FUNDS FOUND" });
    } else {
      resp.status(200).json({ message: "ALL FUNDS DELETED SUCCESSFULLY" });
    }
  } catch (e) {
    resp.status(500).json({ error: e.message });
  }
});

const deleteDataAtMidnight = new CronJob("0 0 * * *", async function() {
  try {
    const deletedFunds = await Fund.deleteMany();
    if (!deletedFunds) {
      console.log("No funds found");
    } else {
      console.log("All funds deleted successfully");
    }

    // Fetch data from API and insert into database
    const response = await axios.get("https://api.kuvera.in/insight/api/v1/mutual_fund_search.json?limit=500&sort_by=one_year_return&order_by=desc&scheme_plan=GROWTH&rating=4,5&v=1.211.0");
    const funds = response.data.data;
    const insertedFunds = await Fund.insertMany(funds);
    console.log(`Inserted ${insertedFunds.length} funds`);
  } catch (e) {
    console.log(e);
  }
});

deleteDataAtMidnight.start();

app.listen(PORT, () => {
  console.log(`Connected to the db and Listening on PORT:${PORT}`);
});
