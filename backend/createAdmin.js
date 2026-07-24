import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    const exists = await User.findOne({
      email: "admin@cropbridge.com",
    });

    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    await User.create({
      name: "Administrator",
      email: "admin@cropbridge.com",
      password: "admin123",   // ← plain text
      phone: "9999999999",
      role: "admin",
      address: "",
      profileImage: "",
    });

    console.log("Admin Created Successfully");

    process.exit();

  } catch (err) {

    console.log(err);

    process.exit(1);

  }
};

createAdmin();