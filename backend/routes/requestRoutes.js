import express from "express";

import {
  sendRequest,
  getFactoryRequests,
  getFarmerRequests,
  acceptRequest,
  rejectRequest,
} from "../controllers/requestController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// =============================
// Factory Routes
// =============================

// Send Request
router.post("/", protect, sendRequest);

// View Factory Requests
router.get("/factory", protect, getFactoryRequests);

// =============================
// Farmer Routes
// =============================

// View Farmer Requests
router.get("/farmer", protect, getFarmerRequests);

// Accept Request
router.put("/:id/accept", protect, acceptRequest);

// Reject Request
router.put("/:id/reject", protect, rejectRequest);

export default router;