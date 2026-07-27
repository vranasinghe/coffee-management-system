const Order = require('../models/orderModel');

// Shared creation logic reused by the HTTP handler below and the AI
// assistant's create_reservation / finalize_order tools, so order creation
// only happens in one place.
const createOrderRecord = async ({ name, email, phone, date, time, guests, message, items, type, userId }) => {
    if (!name || !email || !phone || !date || !time || !guests) {
        const error = new Error('Please provide all required fields (name, email, phone, date, time, guests)');
        error.statusCode = 400;
        throw error;
    }

    // Calculate total price if there are items
    let totalPrice = 0;
    if (items && items.length > 0) {
        totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    const orderData = {
        name,
        email,
        phone,
        date,
        time,
        guests,
        message,
        items: items || [],
        totalPrice,
        type: type || 'reservation'
    };

    // Associate with user if logged in
    if (userId) {
        orderData.user = userId;
    }

    return Order.create(orderData);
};
exports.createOrderRecord = createOrderRecord;

// @desc    Create new order / reservation
// @route   POST /api/orders
// @access  Public
exports.createOrder = async (req, res, next) => {
    try {
        const { name, email, phone, date, time, guests, message, items, type } = req.body;

        const order = await createOrderRecord({
            name,
            email,
            phone,
            date,
            time,
            guests,
            message,
            items,
            type,
            userId: req.user ? req.user._id : undefined
        });

        res.status(201).json({
            success: true,
            data: order
        });
    } catch (error) {
        if (error.statusCode) {
            res.status(error.statusCode);
        }
        next(error);
    }
};

// @desc    Get all orders / reservations (Admin/Staff only)
// @route   GET /api/orders
// @access  Private/Staff/Admin
exports.getOrders = async (req, res, next) => {
    try {
        const { date, status, type } = req.query;
        let query = {};

        if (date) query.date = date;
        if (status) query.status = status;
        if (type) query.type = type;

        const orders = await Order.find(query)
            .populate('user', 'name email')
            .sort({ date: 1, time: 1 });

        res.json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get logged in user's orders / reservations
// @route   GET /api/orders/my
// @access  Private
exports.getMyOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update order / reservation status (Admin/Staff only)
// @route   PUT /api/orders/:id
// @access  Private/Staff/Admin
exports.updateOrderStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        
        if (!status || !['pending', 'confirmed', 'cancelled'].includes(status)) {
            res.status(400);
            return next(new Error('Please provide a valid status (pending, confirmed, cancelled)'));
        }

        let order = await Order.findById(req.params.id);
        if (!order) {
            res.status(404);
            return next(new Error('Reservation/Order not found'));
        }

        order.status = status;
        await order.save();

        res.json({
            success: true,
            data: order
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete order / reservation (Admin/Staff only)
// @route   DELETE /api/orders/:id
// @access  Private/Staff/Admin
exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            res.status(404);
            return next(new Error('Reservation/Order not found'));
        }

        await order.deleteOne();
        res.json({
            success: true,
            message: 'Reservation/Order removed successfully'
        });
    } catch (error) {
        next(error);
    }
};
