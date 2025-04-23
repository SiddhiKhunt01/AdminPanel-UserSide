const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://5997siddhikhunt:siddhi1234@cluster0.9sgbj.mongodb.net/admin-panel');
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
    }
};

module.exports = connectDB();