const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const slide = new Schema({
  image: String,
  title: String,
  subTitle: String,
});

module.exports = mongoose.model("slide", slide, "slide");
