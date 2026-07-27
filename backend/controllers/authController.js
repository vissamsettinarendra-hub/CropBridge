import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// ======================================
// Register User
// ======================================

export const registerUser = async (req, res) => {
  try {
   const { name, email, password, phone, role } = req.body;

          // Validate required fields
          if (!name || !email || !password || !role) {
            return res.status(400).json({
              success: false,
              message: "All required fields are mandatory",
            });
          }

          // Check if user already exists
          const userExists = await User.findOne({
            email: email.toLowerCase(),
          });

        if (userExists) {
          return res.status(400).json({
            success: false,
            message: "User already exists",
          });
        }

          const user = await User.create({
          name,
          email: email.toLowerCase(),
          password,
          phone,
          role,
        });

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const userData = user.toObject();
    delete userData.password;

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      user: userData,
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Login User
// ======================================

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // IMPORTANT
    const user = await User.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    console.log("========== LOGIN ==========");
    console.log("Email :", email);
    console.log("Entered Password :", password);
    console.log("User :", user);
    console.log("Stored Password :", user?.password);
    console.log("===========================");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const userData = user.toObject();
    delete userData.password;

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      user: userData,
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Current User
// ======================================

export const getCurrentUser = async (req, res) => {
  try {

    return res.status(200).json({
      success: true,
      user: req.user,
    });

  } catch (error) {

    console.error("GET USER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Logout
// ======================================

export const logoutUser = (req, res) => {

  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logout Successful",
  });

};