/* eslint-disable no-undef */
const express = require("express");
const skillsModel = require("../model/skillsModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const newSkill = new skillsModel({
    type: req.body.type,
    technology: req.body.technology,
    level: req.body.level,
  });

  try {
    const data = await newSkill.save();
    res.status(201).json({ data: data, status: 201 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const skills = await skillsModel.find().select("-__v");
    res.status(200).json({ data: skills, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/types", async (req, res) => {
  try {
    const skills = await skillsModel
      .find()
      .select("type")
      .distinct("type")
      .exec();
    res.status(200).json({ data: skills, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const skill = await skillsModel.findById(req.params.id).select("-__v");
    res.status(200).json({ data: skill, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true, select: "-__v" };

    const skill = await skillsModel.findByIdAndUpdate(id, req.body, options);
    res.status(200).json({ data: skill, status: 204 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const skill = await skillsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: `The skill ${skill.technology} was deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
