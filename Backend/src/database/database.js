import mongoose from "mongoose"

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to DB")
    
    })
}

export default connectDB;