const express = require('express');
const router = express.Router();
const {
    getInventory,
    getInventoryItem,
    createInventoryItem,
    updateInventoryItem,
    deleteInventoryItem
} = require('../controllers/inventoryController');
const { protect, authorize } = require('../middlewares/authMiddleware');

// All inventory routes require auth and admin/staff roles
router.use(protect);
router.use(authorize('admin', 'staff'));

router.route('/')
    .get(getInventory)
    .post(createInventoryItem);

router.route('/:id')
    .get(getInventoryItem)
    .put(updateInventoryItem)
    .delete(deleteInventoryItem);

module.exports = router;
