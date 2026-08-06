import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { Router } from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import userModel from "../src/model/user.model.js";
// Ensure environment variables are loaded
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config({ path: path.join(__dirname, "../.env") });
const clientID = process.env.GOOGLE_CLIENT_ID ||
    process.env.CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET ||
    process.env.CLIENT_SECRET;
const callbackURL = process.env.GOOGLE_CALLBACK_URL ||
    "/api/auth/google/callback";
// Register Google Strategy with Passport if credentials are available
if (clientID && clientSecret) {
    passport.use("google-auth-module", new GoogleStrategy({
        clientID,
        clientSecret,
        callbackURL,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails && profile.emails[0]
                ? profile.emails[0].value.toLowerCase().trim()
                : null;
            const googleId = profile.id;
            const avatar = profile.photos && profile.photos[0] ? profile.photos[0].value : "";
            const name = profile.displayName || profile.name?.givenName || "Google User";
            if (!email) {
                return done(new Error("No email found in Google profile"), false);
            }
            let user = await userModel.findOne({
                $or: [{ googleId }, { email }],
            });
            if (user) {
                user.googleId = user.googleId || googleId;
                if (!user.avatar && avatar)
                    user.avatar = avatar;
                user.lastLoginAt = new Date();
                await user.save();
                return done(null, user);
            }
            user = await userModel.create({
                name,
                email,
                googleId,
                avatar,
                lastLoginAt: new Date(),
            });
            return done(null, user);
        }
        catch (err) {
            return done(err, false);
        }
    }));
}
else {
    console.warn("Google Auth credentials (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET) missing. Google OAuth disabled.");
}
const router = Router();
const handleAuth = passport.authenticate("google-auth-module", {
    scope: ["email", "profile"],
    session: false,
});
const handleCallback = [
    (req, res, next) => {
        const frontendUrl = process.env.FRONTEND_URL || "/";
        const failPath = frontendUrl.endsWith("/") ? `${frontendUrl}?error=google_auth_failed` : `${frontendUrl}/?error=google_auth_failed`;
        passport.authenticate("google-auth-module", {
            session: false,
            failureRedirect: failPath,
        })(req, res, next);
    },
    (req, res) => {
        try {
            const user = req.user;
            const frontendUrl = process.env.FRONTEND_URL || "/";
            if (!user) {
                const failPath = frontendUrl.endsWith("/") ? `${frontendUrl}?error=google_auth_failed` : `${frontendUrl}/?error=google_auth_failed`;
                return res.redirect(failPath);
            }
            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                throw new Error("JWT_SECRET is not defined");
            }
            const token = jwt.sign({
                id: user._id,
                name: user.name,
            }, jwtSecret, {
                expiresIn: "7d",
            });
            const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true" || !!(process.env.FRONTEND_URL && process.env.FRONTEND_URL.includes("https"));
            res.cookie("token", token, {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? "none" : "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            const redirectUrl = frontendUrl === "/"
                ? `/?token=${token}`
                : (frontendUrl.includes("?") ? `${frontendUrl}&token=${token}` : `${frontendUrl}?token=${token}`);
            return res.redirect(redirectUrl);
        }
        catch (err) {
            console.error("Google Callback Error:", err);
            const frontendUrl = process.env.FRONTEND_URL || "/";
            const errPath = frontendUrl.endsWith("/") ? `${frontendUrl}?error=server_error` : `${frontendUrl}/?error=server_error`;
            return res.redirect(errPath);
        }
    },
];
// Support all standard Google Auth route aliases
router.get("/google", handleAuth);
router.get("/google/callback", handleCallback);
router.get("/auth/google", handleAuth);
router.get("/auth/google/callback", handleCallback);
router.get("/api/auth/google", handleAuth);
router.get("/api/auth/google/callback", handleCallback);
export default router;
//# sourceMappingURL=index.js.map