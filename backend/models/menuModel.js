const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a menu item name'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Please specify a category'],
        enum: ['coffee', 'espresso', 'non-coffee', 'add-on', 'bread', 'snack'],
        trim: true
    },
    price: {
        type: Number // Single pricing for add-ons, breads, snacks
    },
    priceMedium: {
        type: Number // Size-based medium price (16 oz)
    },
    priceLarge: {
        type: Number // Size-based large price (20 oz)
    },
    isRecommended: {
        type: Boolean,
        default: false
    },
    isNewItem: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Menu', menuSchema);
