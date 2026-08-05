import mongoose from "mongoose"

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