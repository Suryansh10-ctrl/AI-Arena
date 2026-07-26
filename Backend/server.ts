import dotenv from "dotenv"
dotenv.config()
console.log("JWT_SECRET:", process.env.JWT_SECRET);


import dns from "dns"
dns.setServers(["8.8.8.8"]);

import app from "./src/app.js"
// @ts-ignore
import connectDB from "./src/database/database.js";


app.listen(3000, () => {
    console.log("server is running at port 3000")
})
connectDB()