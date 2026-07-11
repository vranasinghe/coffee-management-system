const Contact = require('../models/contactModel');

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            res.status(400);
            return next(new Error('Please fill in all fields (name, email, phone, message)'));
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            message
        });

        res.status(201).json({
            success: true,
            data: contact
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all contact messages (Admin/Staff only)
// @route   GET /api/contact
// @access  Private/Staff/Admin
exports.getContactMessages = async (req, res, next) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            count: messages.length,
            data: messages
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Mark contact message as read (Admin/Staff only)
// @route   PUT /api/contact/:id/read
// @access  Private/Staff/Admin
exports.markAsRead = async (req, res, next) => {
    try {
        const message = await Contact.findById(req.params.id);
        if (!message) {
            res.status(404);
            return next(new Error('Contact message not found'));
        }

        message.isRead = true;
        await message.save();

        res.json({
            success: true,
            data: message
        });
    } catch (error) {
        next(error);
    }
};
