import express from "express";

import {
  getFarmerOrders,
  getFactoryOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Farmer orders
router.get("/farmer", protect, getFarmerOrders);

// Factory orders
router.get("/factory", protect, getFactoryOrders);

// Single order
router.get("/:id", protect, getOrderById);

// Update order status
router.put("/:id/status", protect, updateOrderStatus);

export default router;