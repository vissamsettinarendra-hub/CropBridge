import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {

    // Read token from cookie
    const token = req.cookies.token;

    // Check token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. Please Login.",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    // Save logged-in user
    req.user = user;

    next();

  } catch (error) {
    console.error("AUTH ERROR:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};