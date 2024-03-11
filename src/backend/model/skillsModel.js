const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    type: {
        required: [true, 'The type is required.'],
        type: String,
    },
    technology: {
        required: [true, 'The technology is required.'],
        type: String,
    },
    level: {
        required: [true, 'The level is required.'],
        type: String,
        enum: ['Medium', 'Advanced']
    }
});

const Skills = new mongoose.model('Skills', skillsSchema);
module.exports = Skills;