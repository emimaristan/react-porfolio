/* eslint-disable no-undef */
const express = require("express");
const educationModel = require("../model/educationModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const newEducation = new educationModel({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    startYear: req.body.startYear,
    endYear: req.body.endYear,
  });

  try {
    const education = await newEducation.save();
    res.status(201).json({ data: education, status: 201 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const education = await educationModel.find().select("-__v");
    res.status(200).json({ data: education, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/types", async (req, res) => {
  try {
    const education = await educationModel
      .find()
      .select("type")
      .distinct("type")
      .exec();
    res.status(200).json({ data: education, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const education = await educationModel
      .findById(req.params.id)
      .select("-__v");
    res.status(200).json({ data: education, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true, select: "-__v" };

    const education = await educationModel.findByIdAndUpdate(
      id,
      req.body,
      options
    );
    res.status(200).json({ data: education, status: 204 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const education = await educationModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: `The education ${education.title} was deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
