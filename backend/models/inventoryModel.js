const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add an inventory item name'],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, 'Please add a quantity'],
        default: 0
    },
    unit: {
        type: String,
        required: [true, 'Please specify the unit (e.g. kg, liters, cups, pieces)'],
        trim: true
    },
    minStockLevel: {
        type: Number,
        required: [true, 'Please add a minimum stock level alert threshold'],
        default: 5
    },
    supplier: {
        type: String,
        trim: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Inventory', inventorySchema);
