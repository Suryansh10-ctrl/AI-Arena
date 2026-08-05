import dotenv from "dotenv"
dotenv.config()
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "Loaded" : "Missing");

import app from "./src/app.js"
// @ts-ignore
import connectDB from "./src/database/database.js";


const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is running on port ${PORT}`);
}); 
connectDB();