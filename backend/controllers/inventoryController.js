const Inventory = require('../models/inventoryModel');

// @desc    Get all inventory items
// @route   GET /api/inventory
// @access  Private/Staff/Admin
exports.getInventory = async (req, res, next) => {
    try {
        const inventoryItems = await Inventory.find().sort({ name: 1 });
        res.json({
            success: true,
            count: inventoryItems.length,
            data: inventoryItems
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single inventory item
// @route   GET /api/inventory/:id
// @access  Private/Staff/Admin
exports.getInventoryItem = async (req, res, next) => {
    try {
        const inventoryItem = await Inventory.findById(req.params.id);
        if (!inventoryItem) {
            res.status(404);
            return next(new Error('Inventory item not found'));
        }
        res.json({
            success: true,
            data: inventoryItem
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Create new inventory item
// @route   POST /api/inventory
// @access  Private/Staff/Admin
exports.createInventoryItem = async (req, res, next) => {
    try {
        const { name, quantity, unit, minStockLevel, supplier } = req.body;

        if (!name || quantity === undefined || !unit) {
            res.status(400);
            return next(new Error('Please provide name, quantity, and unit'));
        }

        const item = await Inventory.create({
            name,
            quantity,
            unit,
            minStockLevel: minStockLevel || 5,
            supplier
        });

        res.status(201).json({
            success: true,
            data: item
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update inventory item
// @route   PUT /api/inventory/:id
// @access  Private/Staff/Admin
exports.updateInventoryItem = async (req, res, next) => {
    try {
        let inventoryItem = await Inventory.findById(req.params.id);
        if (!inventoryItem) {
            res.status(404);
            return next(new Error('Inventory item not found'));
        }

        req.body.updatedAt = Date.now();
        inventoryItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.json({
            success: true,
            data: inventoryItem
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete inventory item
// @route   DELETE /api/inventory/:id
// @access  Private/Staff/Admin
exports.deleteInventoryItem = async (req, res, next) => {
    try {
        const inventoryItem = await Inventory.findById(req.params.id);
        if (!inventoryItem) {
            res.status(404);
            return next(new Error('Inventory item not found'));
        }

        await inventoryItem.deleteOne();
        res.json({
            success: true,
            message: 'Inventory item removed successfully'
        });
    } catch (error) {
        next(error);
    }
};
