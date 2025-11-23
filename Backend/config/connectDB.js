import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
    if (!process.env.MONGODB_URI) {
        throw new Error("Please provide mongodb url");
    }

    try {
        // Add connection options to handle SSL/TLS properly
        const options = {
            // Remove deprecated options and use modern ones
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        };

        // If using MongoDB Atlas, ensure SSL is properly configured
        if (process.env.MONGODB_URI.includes('mongodb.net')) {
            // MongoDB Atlas requires SSL/TLS
            // The connection string should already include SSL parameters
            // But we can add additional options if needed
        }

        await mongoose.connect(process.env.MONGODB_URI, options);
        console.log("mongodb connection established");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        
        // Provide helpful error messages
        if (error.message.includes('SSL') || error.message.includes('TLS')) {
            console.error("\n💡 SSL/TLS Connection Issues:");
            console.error("   1. Check if your IP address is whitelisted in MongoDB Atlas");
            console.error("   2. Verify your MongoDB connection string is correct");
            console.error("   3. Check your network/firewall settings");
            console.error("   4. Try using MongoDB Compass to test the connection");
        } else if (error.message.includes('timeout')) {
            console.error("\n💡 Connection Timeout:");
            console.error("   1. Check your internet connection");
            console.error("   2. Verify MongoDB Atlas cluster is running");
            console.error("   3. Check if your IP is whitelisted");
        }
        
        process.exit(1);
    }
}

export default connectDB;