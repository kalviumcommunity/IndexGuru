require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const Fund = require("./models/fundSchema");
require("./db/connection");

app.use(express.json());

app.get("/apis/v1/funds/", async (req, resp) => {
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
  const {
    name,
    category,
    amc,
    sub_category,
    unique_fund_code,
    kuvera_id,
    asset_class_name,
    one_year_return,
    three_year_return,
    current_nav,
    Scheme_plan,
    slug,
    tags,
    one_day_return,
    short_name,
    short_code,
    rating,
    fund_active,
    ter,
  } = req.body;
  try {
    const funds = await Fund.create({
      name,
      category,
      amc,
      sub_category,
      unique_fund_code,
      kuvera_id,
      asset_class_name,
      one_year_return,
      three_year_return,
      current_nav,
      Scheme_plan,
      slug,
      tags,
      one_day_return,
      short_name,
      short_code,
      rating,
      fund_active,
      ter,
    });
    if (!funds) {
      resp.send("Empty");
    } else {
      resp.status(200).json(funds);
    }
  } catch (e) {
    resp.status(500).json({ error: e });
  }
});

app.listen(PORT, () => {
  console.log(`Connected to the db and Listening on PORT:${PORT}`);
});
