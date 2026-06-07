const mongoose = require("mongoose");
const DB_NAME = require("../constants");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@postopscluster.1zfqaqc.mongodb.net/${DB_NAME}?appName=PostopsCluster`;

        const connectionInstance = await mongoose.connect(uri);
        console.log(`Database connected successfully! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

module.exports = { connectDB };