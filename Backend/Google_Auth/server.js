import { config } from "dotenv";
import express from "express";
import passport from "passport";
import morgan from "morgan";
import googleAuthRouter from "./index.js";

config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", googleAuthRouter);
app.use("/auth", googleAuthRouter);

app.get("/", (req, res) => {
  res.send("Google Auth Service is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Google Auth Service is running on port ${PORT}`);
});