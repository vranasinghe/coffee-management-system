const express = require('express');
const router = express.Router();
const {
    getGallery,
    createGalleryItem,
    deleteGalleryItem
} = require('../controllers/galleryController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.route('/')
    .get(getGallery)
    .post(protect, authorize('admin', 'staff'), createGalleryItem);

router.route('/:id')
    .delete(protect, authorize('admin', 'staff'), deleteGalleryItem);

module.exports = router;
