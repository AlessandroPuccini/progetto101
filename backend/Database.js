require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.SERVER_MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Success! MongoDB Connected");
    } catch (error) {
        console.log('Hey dude, mongodb error',error.message);
        process.exit(1);
    }
}
module.exports = connectDB;