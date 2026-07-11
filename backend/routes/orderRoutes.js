const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    getMyOrders,
    updateOrderStatus,
    deleteOrder
} = require('../controllers/orderController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.route('/')
    .post(createOrder)
    .get(protect, authorize('admin', 'staff'), getOrders);

router.route('/my')
    .get(protect, getMyOrders);

router.route('/:id')
    .put(protect, authorize('admin', 'staff'), updateOrderStatus)
    .delete(protect, authorize('admin', 'staff'), deleteOrder);

module.exports = router;
