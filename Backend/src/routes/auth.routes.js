import { Router } from "express";
import googleAuthRouter from "../../Google_Auth/index.js";
import { getMe, login, register, logout } from "../controller/auth.controller.js";
import { loginValidator, registerValidator } from "../validator/auth.validator.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, register);
authRouter.post("/login", loginValidator, login);
authRouter.get('/get-me', authUser, getMe);
authRouter.post('/logout', logout);

// Mount Google Auth service from Google_Auth folder
authRouter.use(googleAuthRouter);

export default authRouter;