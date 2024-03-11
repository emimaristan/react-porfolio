const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    type : {
        required: [true, 'The type is required.'],
        type: String,
        enum: {
            values: ['Education', 'Experience'],
            message: 'Type is either Education or Experience'
        },

    },
    title: {
        required: [true, 'The title is required.'],
        type: String
    },
    description: {
        required: [true, 'The description is required.'],
        type: String
    },
    startYear: {
        required: [true, 'The start year is required.'],
        type: Number,
        min: [2000, 'The start year must be above 2000'],
        max: [2050, 'The start year must be below 2050']
    },
    endYear: {
        type: Number,
        min: [2000, 'The end year must be above 2000'],
        max: [2050, 'The end year must be below 2050']
    }
});


const Education = mongoose.model('Education', educationSchema);
module.exports = Tour;