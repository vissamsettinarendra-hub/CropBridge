import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cropRoutes from "./routes/cropRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true,               // Allow cookies
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🌾 CropBridge Backend Running Successfully",
  });
});

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/crops", cropRoutes);

app.use("/api/requests", requestRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});