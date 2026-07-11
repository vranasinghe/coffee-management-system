const express = require('express');
const router = express.Router();
const {
    submitContact,
    getContactMessages,
    markAsRead
} = require('../controllers/contactController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.post('/', submitContact);
router.get('/', protect, authorize('admin', 'staff'), getContactMessages);
router.put('/:id/read', protect, authorize('admin', 'staff'), markAsRead);

module.exports = router;
