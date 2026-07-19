const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const User = require('../models/userModel');
const Menu = require('../models/menuModel');
const Inventory = require('../models/inventoryModel');
const Gallery = require('../models/galleryModel');

dotenv.config({ path: path.join(__dirname, '../.env') });

const menuItems = [
    // Coffee
    { name: 'Brewed coffee', category: 'coffee', priceMedium: 1.85, priceLarge: 2.35 },
    { name: 'Cafe au lait', category: 'coffee', priceMedium: 2.65, priceLarge: 3.40 },
    { name: 'French press', category: 'coffee', priceMedium: 2.65, priceLarge: 3.40 },
    { name: 'Iced coffee', category: 'coffee', priceMedium: 1.85, priceLarge: 2.35 },

    // Espresso
    { name: 'Espresso', category: 'espresso', priceMedium: 1.75, priceLarge: 2.20 },
    { name: 'Mocchiato', category: 'espresso', priceMedium: 1.95, priceLarge: 2.25 },
    { name: 'Con panna', category: 'espresso', priceMedium: 1.95, priceLarge: 2.25, isNewItem: true },
    { name: 'Cafe latte', category: 'espresso', priceMedium: 3.15, priceLarge: 4.15 },
    { name: 'Classic Cappucino', category: 'espresso', priceMedium: 2.90, priceLarge: 3.90, isRecommended: true },
    { name: 'Cappucino', category: 'espresso', priceMedium: 3.15, priceLarge: 4.15 },
    { name: 'Mocha latte', category: 'espresso', priceMedium: 3.45, priceLarge: 4.35 },
    { name: 'Caramel late', category: 'espresso', priceMedium: 3.45, priceLarge: 4.35 },
    { name: 'Vanilla late', category: 'espresso', priceMedium: 3.45, priceLarge: 4.35 },
    { name: 'Cafe miel', category: 'espresso', priceMedium: 3.85, priceLarge: 4.70 },
    { name: 'Cafe americano', category: 'espresso', priceMedium: 2.25, priceLarge: 3.50 },

    // Non-coffee
    { name: 'Hot tea', category: 'non-coffee', priceMedium: 1.85, priceLarge: 2.35 },
    { name: 'Iced tea', category: 'non-coffee', priceMedium: 2.65, priceLarge: 3.40 },
    { name: 'Steamer', category: 'non-coffee', priceMedium: 2.85, priceLarge: 3.85, isNewItem: true },
    { name: 'Hot chocolate', category: 'non-coffee', priceMedium: 2.85, priceLarge: 3.85, isRecommended: true },
    { name: 'Lemonade', category: 'non-coffee', priceMedium: 2.50, priceLarge: 3.50 },
    { name: 'Fruit smoothie', category: 'non-coffee', priceMedium: 3.15, priceLarge: 4.15 },

    // Add ons
    { name: 'Pearl', category: 'add-on', price: 1.15 },
    { name: 'Almond', category: 'add-on', price: 1.15 },
    { name: 'Coffee Jelly', category: 'add-on', price: 1.15 },

    // Breads
    { name: 'Plain bread', category: 'bread', price: 2.75 },
    { name: 'Milk bread', category: 'bread', price: 2.75 },
    { name: 'Sandwich bread', category: 'bread', price: 2.75 },
    { name: 'Brown bread', category: 'bread', price: 2.75 },
    { name: 'Garlic bread', category: 'bread', price: 2.75, isRecommended: true },
    { name: 'Wheat bread', category: 'bread', price: 2.75 },
    { name: 'Bannana bread', category: 'bread', price: 2.75 },
    { name: 'Burger bun', category: 'bread', price: 2.75 },

    // Snacks
    { name: 'Chicken burger', category: 'snack', price: 4.75 },
    { name: 'Chicken pizza', category: 'snack', price: 8.75 },
    { name: 'Veg pizza', category: 'snack', price: 6.75, isNewItem: true },
    { name: 'Chicken grilled pizza', category: 'snack', price: 8.75 },
    { name: 'Veg grilled pizza', category: 'snack', price: 6.75 },
    { name: 'Chicken sandwich', category: 'snack', price: 4.75 },
    { name: 'Veg sandwich', category: 'snack', price: 3.75 },
    { name: 'French fries', category: 'snack', price: 2.75 }
];

const inventoryItems = [
    { name: 'Coffee Beans (Espresso Blend)', quantity: 25, unit: 'kg', minStockLevel: 5, supplier: 'RoastMasters Co.' },
    { name: 'Coffee Beans (Decaf)', quantity: 10, unit: 'kg', minStockLevel: 2, supplier: 'RoastMasters Co.' },
    { name: 'Whole Milk', quantity: 40, unit: 'liters', minStockLevel: 10, supplier: 'Dairy Fresh Ltd' },
    { name: 'Almond Milk', quantity: 15, unit: 'liters', minStockLevel: 5, supplier: 'Dairy Fresh Ltd' },
    { name: 'Oat Milk', quantity: 20, unit: 'liters', minStockLevel: 5, supplier: 'Dairy Fresh Ltd' },
    { name: 'White Sugar', quantity: 15, unit: 'kg', minStockLevel: 3, supplier: 'Bulk Foods Corp' },
    { name: 'Brown Sugar', quantity: 8, unit: 'kg', minStockLevel: 2, supplier: 'Bulk Foods Corp' },
    { name: 'Chocolate Syrup', quantity: 12, unit: 'liters', minStockLevel: 3, supplier: 'SweetSupplies Inc.' },
    { name: 'Paper Cups (16 oz)', quantity: 500, unit: 'units', minStockLevel: 100, supplier: 'PackSafe Packaging' },
    { name: 'Paper Cups (20 oz)', quantity: 400, unit: 'units', minStockLevel: 100, supplier: 'PackSafe Packaging' }
];

const galleryItems = [
    { title: 'Cozy Dining', url: 'images/gallery/1.jpg' },
    { title: 'Premium Espresso', url: 'images/gallery/2.jpg' },
    { title: 'Warm Brew', url: 'images/gallery/3.jpg' },
    { title: 'Pastry & Coffee', url: 'images/gallery/4.jpg' },
    { title: 'Rustic Interior', url: 'images/gallery/5.jpg' },
    { title: 'Barista Specials', url: 'images/gallery/6.jpg' }
];

const seedDB = async () => {
    try {
        console.log('Connecting to database for seeding...');
        const connString = process.env.MONGO_URI || 'mongodb://localhost:27017/coffee_shop';
        await mongoose.connect(connString);
        console.log('Connected to MongoDB.');

        // Clean tables
        console.log('Purging database...');
        await User.deleteMany();
        await Menu.deleteMany();
        await Inventory.deleteMany();
        await Gallery.deleteMany();

        // Seed users
        console.log('Seeding default users...');
        await User.create([
            { name: 'Admin Manager', email: 'admin@stradale.com', password: 'admin123', role: 'admin' },
            { name: 'Barista Staff', email: 'staff@stradale.com', password: 'staff123', role: 'staff' },
            { name: 'John Doe', email: 'john@gmail.com', password: 'password123', role: 'customer' }
        ]);
        console.log('Users seeded.');

        // Seed menu
        console.log('Seeding menu items...');
        await Menu.insertMany(menuItems);
        console.log('Menu seeded.');

        // Seed inventory
        console.log('Seeding inventory items...');
        await Inventory.insertMany(inventoryItems);
        console.log('Inventory seeded.');

        // Seed gallery
        console.log('Seeding gallery items...');
        await Gallery.insertMany(galleryItems);
        console.log('Gallery seeded.');

        console.log('Seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('================================================================');
        console.error('DATABASE SEEDING CONNECTION ERROR:');
        console.error(error.message);
        console.error('----------------------------------------------------------------');
        console.error('Troubleshooting instructions:');
        console.error('1. Check if local MongoDB is running:');
        console.error('   Run: net start MongoDB (in admin cmd/powershell)');
        console.error('2. Or run MongoDB via Docker:');
        console.error('   Run: docker run -d -p 27017:27017 --name mongodb mongo');
        console.error('3. Or configure a MongoDB Atlas cloud database in backend/.env');
        console.error('================================================================');
        process.exit(1);
    }
};

seedDB();
