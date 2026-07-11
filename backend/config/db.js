const mongoose = require('mongoose');
const dns = require('dns');

// Force Node.js to use reliable public DNS resolvers to handle MongoDB SRV lookups
dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('================================================================');
        console.error('DATABASE CONNECTION ERROR:');
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

module.exports = connectDB;
