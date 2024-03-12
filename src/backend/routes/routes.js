/* eslint-disable no-undef */
const express = require("express");
const skillsModel = require("../model/skillsModel");
const educationModel = require("../model/educationModel");

const router = express.Router();

//SKILLS
router.post("/skills", async (req, res) => {
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

router.get("/skills", async (req, res) => {
  try {
    const skills = await skillsModel.find().select("-_id -__v");
    res.status(200).json({ data: skills, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/skills/:id", async (req, res) => {
  try {
    const skill = await skillsModel.findById(req.params.id).select("-_id -__v");
    res.status(200).json({ data: skill, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/skills/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true, select: "-_id -__v" };

    const skill = await skillsModel.findByIdAndUpdate(id, req.body, options);
    res.status(200).json({ data: skill, status: 204 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/skills/:id", async (req, res) => {
  try {
    const skill = await skillsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: `The skill ${skill.technology} was deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//education
router.post("/education", async (req, res) => {
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

router.get("/education", async (req, res) => {
  try {
    const education = await educationModel.find().select("-_id -__v");
    res.status(200).json({ data: education, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/education/:id", async (req, res) => {
  try {
    const education = await educationModel
      .findById(req.params.id)
      .select("-_id -__v");
    res.status(200).json({ data: education, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/education/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true, select: "-_id -__v" };

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

router.delete("/education/:id", async (req, res) => {
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
