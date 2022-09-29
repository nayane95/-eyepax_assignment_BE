const express = require("express");
require('dotenv').config();
const router = express.Router();

// modles
const Slide = require("../models/slide");


// POST method for store carousel data
router.post("/slide", async (req, res) => {
  const slide = new Slide(req.body);
  try {
    await slide.save();
    res.status(200).send(slide);
  } catch (error) {
    res.status(500).send(error);
  }
});

//  GET API to fetch  data
router.get("/carousel", async (req, res) => {
  try {
    const selectedSlide = await Slide.find().limit(Number(req.query.slides));
    res.status(200).send(selectedSlide);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = router;
