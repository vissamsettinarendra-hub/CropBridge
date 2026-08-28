import express from "express";

import {
  getFarmerOrders,
  getFactoryOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ====================================
// Farmer Orders
// ====================================

router.get(
  "/farmer",
  protect,
  getFarmerOrders
);

// ====================================
// Factory Orders
// ====================================

router.get(
  "/factory",
  protect,
  getFactoryOrders
);

// ====================================
// Get Single Order
// ====================================

router.get(
  "/:id",
  protect,
  getOrderById
);

// ====================================
// Update Order Status
// ====================================
router.put(
  "/:id/status",
  protect,
  updateOrderStatus
);


export default router;   