const Menu = require('../models/menuModel');

// @desc    Get all menu items (can filter by category)
// @route   GET /api/menu
// @access  Public
exports.getMenu = async (req, res, next) => {
    try {
        const { category } = req.query;
        let query = {};
        
        if (category) {
            query.category = category;
        }

        const menuItems = await Menu.find(query);
        res.json({
            success: true,
            count: menuItems.length,
            data: menuItems
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single menu item
// @route   GET /api/menu/:id
// @access  Public
exports.getMenuItem = async (req, res, next) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) {
            res.status(404);
            return next(new Error('Menu item not found'));
        }
        res.json({
            success: true,
            data: menuItem
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Create a new menu item
// @route   POST /api/menu
// @access  Private/Admin/Staff
exports.createMenuItem = async (req, res, next) => {
    try {
        const { name, category, price, priceMedium, priceLarge, isRecommended, isNewItem } = req.body;

        const menuItem = await Menu.create({
            name,
            category,
            price,
            priceMedium,
            priceLarge,
            isRecommended,
            isNewItem
        });

        res.status(201).json({
            success: true,
            data: menuItem
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update a menu item
// @route   PUT /api/menu/:id
// @access  Private/Admin/Staff
exports.updateMenuItem = async (req, res, next) => {
    try {
        let menuItem = await Menu.findById(req.params.id);
        if (!menuItem) {
            res.status(404);
            return next(new Error('Menu item not found'));
        }

        menuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.json({
            success: true,
            data: menuItem
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a menu item
// @route   DELETE /api/menu/:id
// @access  Private/Admin/Staff
exports.deleteMenuItem = async (req, res, next) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) {
            res.status(404);
            return next(new Error('Menu item not found'));
        }

        await menuItem.deleteOne();
        res.json({
            success: true,
            message: 'Menu item removed successfully'
        });
    } catch (error) {
        next(error);
    }
};
