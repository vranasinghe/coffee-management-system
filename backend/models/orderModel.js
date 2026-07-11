const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a contact name']
    },
    email: {
        type: String,
        required: [true, 'Please add a contact email'],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'Please add a contact phone']
    },
    date: {
        type: String,
        required: [true, 'Please select a reservation date']
    },
    time: {
        type: String,
        required: [true, 'Please select a reservation time']
    },
    guests: {
        type: String,
        required: [true, 'Please specify the number of guests']
    },
    message: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    items: [
        {
            menuItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Menu'
            },
            name: String,
            quantity: Number,
            price: Number,
            size: String // 'medium', 'large', 'single'
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        enum: ['reservation', 'order', 'both'],
        default: 'reservation'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
