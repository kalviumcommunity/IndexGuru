const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FundSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amc: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  unique_fund_code: {
    type: String,
    required: true,
  },
  kuvera_id: {
    type: String,
    required: true,
  },
  asset_class_name: {
    type: String,
    required: true,
  },

  one_year_return: {
    type: Number,
    required: true,
  },
  three_year_return: {
    type: Number,
    required: true,
  },
  current_nav: {
    type: Number,
    required: true,
  },
  scheme_plan: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
  },
  one_day_return: {
    type: Number,
    required: true,
  },
  short_name: {
    type: String,
    required: true,
  },
  short_code: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  fund_active: {
    type: Boolean,
    required: true,
  },
  ter: {
    type: Number,
  },
});

module.exports = mongoose.model("Fund", FundSchema);
