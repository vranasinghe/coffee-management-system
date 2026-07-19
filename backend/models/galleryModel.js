const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add an image title'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'Please add an image URL'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Gallery', gallerySchema);
