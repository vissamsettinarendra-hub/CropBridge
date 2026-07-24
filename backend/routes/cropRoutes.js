import express from "express";

import {
  addCrop,
  getAllCrops,
  getMyCrops,
  getCropById,
  updateCrop,
  deleteCrop,
} from "../controllers/cropController.js";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ================= Public Routes =================

// Get all crops
router.get("/", getAllCrops);

// Get logged-in farmer crops
router.get("/my/crops", protect, getMyCrops);

// Get single crop
router.get("/:id", getCropById);

// ================= Farmer Routes =================

// Add Crop
router.post(
  "/",
  protect,
  upload.single("image"),
  addCrop
);

// Update Crop
router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateCrop
);

// Delete Crop
router.delete(
  "/:id",
  protect,
  deleteCrop
);

export default router;