const express = require('express');
const Model = require('../model/skillsModel');

const router = express.Router();

router.post('/post', async (req, res) => {
    const newTask = new Model({
        task: req.body.task,
        status: true,
    });

    try {
        const data = await newTask.save();
        res.status(201).json({data: data, status: 201});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/getAll', async(req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json({data: data, status: 200});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).json({data: data, status: 200});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        console.log(req.body);
        const id = req.params.id;
        const options = {new: true};
        
        const data = await Model.findByIdAndUpdate(id, req.body, options);
        res.status(204).json({data: data, status: 204});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const data = Model.findByIdAndDelete(req.params.id);
        res.status(200).json(data.name);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;