import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../model/user.model.js";

const isProduction =
  process.env.NODE_ENV === "production" ||
  process.env.RENDER === "true" ||
  !!(process.env.FRONTEND_URL && process.env.FRONTEND_URL.includes("https"));

const clientID = process.env.GOOGLE_CLIENT_ID || process.env.CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET || process.env.CLIENT_SECRET;

let callbackURL = process.env.GOOGLE_CALLBACK_URL;
if (!callbackURL || (isProduction && callbackURL.includes("localhost"))) {
  callbackURL = isProduction
    ? "https://ai-arena-4i2t.onrender.com/auth/google/callback"
    : "http://localhost:3000/auth/google/callback";
}

if (clientID && clientSecret) {
  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails && profile.emails[0] ? profile.emails[0].value.toLowerCase().trim() : null;
          const googleId = profile.id;
          const avatar = profile.photos && profile.photos[0] ? profile.photos[0].value : "";
          const name = profile.displayName || profile.name?.givenName || "Google User";

          if (!email) {
            return done(new Error("No email found from Google profile"), false);
          }

          // Check if user exists by googleId or email
          let user = await userModel.findOne({
            $or: [{ googleId }, { email }],
          });

          if (user) {
            // Update user details if missing googleId or avatar
            let isModified = false;
            if (!user.googleId) {
              user.googleId = googleId;
              isModified = true;
            }
            if (!user.avatar && avatar) {
              user.avatar = avatar;
              isModified = true;
            }
            if (isModified) {
              await user.save();
            }
            return done(null, user);
          }

          // Create new user if not existing
          user = await userModel.create({
            name,
            email,
            googleId,
            avatar,
          });

          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
} else {
  console.warn("Google OAuth Client ID or Client Secret missing in environment.");
}

export default passport;
