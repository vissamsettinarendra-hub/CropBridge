import express from "express";

import {
  createPayment,
  getFactoryPayments,
  getFarmerPayments,
  getPaymentById,
  getFactoryUnpaidOrders,
} from "../controllers/paymentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ====================================
// Create Payment
// ====================================

router.post(
  "/",
  protect,
  createPayment
);

// ====================================
// Factory Payments
// ====================================

router.get(
  "/factory",
  protect,
  getFactoryPayments
);

// ====================================
// Farmer Payments
// ====================================

router.get(
  "/farmer",
  protect,
  getFarmerPayments
);

// ====================================
// Factory Unpaid Orders
// ====================================

router.get(
  "/factory/unpaid",
  protect,
  getFactoryUnpaidOrders
);

// ====================================
// Get Payment By ID
// ====================================
router.get(
  "/:id",
  protect,
  getPaymentById
);

export default router; 