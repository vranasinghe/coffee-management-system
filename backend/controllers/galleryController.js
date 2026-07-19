const Gallery = require('../models/galleryModel');

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
exports.getGallery = async (req, res, next) => {
    try {
        const galleryItems = await Gallery.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: galleryItems.length,
            data: galleryItems
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Create a new gallery item
// @route   POST /api/gallery
// @access  Private/Admin/Staff
exports.createGalleryItem = async (req, res, next) => {
    try {
        const { title, url } = req.body;

        if (!title || !url) {
            res.status(400);
            return next(new Error('Please provide title and url'));
        }

        const galleryItem = await Gallery.create({
            title,
            url
        });

        res.status(201).json({
            success: true,
            data: galleryItem
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a gallery item
// @route   DELETE /api/gallery/:id
// @access  Private/Admin/Staff
exports.deleteGalleryItem = async (req, res, next) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            res.status(404);
            return next(new Error('Gallery item not found'));
        }

        await galleryItem.deleteOne();
        res.json({
            success: true,
            message: 'Gallery item removed successfully'
        });
    } catch (error) {
        next(error);
    }
};
