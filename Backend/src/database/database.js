import mongoose from "mongoose"
import dns from "dns"

// Use public DNS servers to resolve MongoDB SRV records if local router/ISP DNS fails
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error("❌ MONGO_URI is missing in environment variables!");
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to DB");
    } catch (err) {
        console.error("❌ Database Connection Failure:", err);
    }
}

export default connectDB;