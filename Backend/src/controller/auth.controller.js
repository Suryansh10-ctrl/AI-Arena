import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";
import crypto from "crypto"

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const isUserAlreadyExists = await userModel.findOne({
      email: email.toLowerCase().trim(),
    });

    if (isUserAlreadyExists) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const user = await userModel.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await userModel.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    user.lastLoginAt = new Date();
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true" || !!(process.env.FRONTEND_URL && process.env.FRONTEND_URL.includes("https"));

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function getMe(req, res) {
  try {
    const userId = req.user.id;

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User details fetched successfully",
      user,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function logout(req, res) {
  res.clearCookie("token");

  return res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
}

export async function googleCallback(req, res) {
  try {
    const user = req.user;
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

    if (!user) {
      return res.redirect(`${frontendUrl}?error=google_auth_failed`);
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true" || !!(process.env.FRONTEND_URL && process.env.FRONTEND_URL.includes("https"));

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const redirectUrl = frontendUrl.includes("?") 
      ? `${frontendUrl}&token=${token}` 
      : `${frontendUrl}?token=${token}`;

    return res.redirect(redirectUrl);
  } catch (err) {
    console.error("Google Callback Error:", err);
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    return res.redirect(`${frontendUrl}?error=server_error`);
  }
}