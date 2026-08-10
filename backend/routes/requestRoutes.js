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

// Factory
router.post("/", protect, sendRequest);
router.get("/factory", protect, getFactoryRequests);

// Farmer
router.get("/farmer", protect, getFarmerRequests);
router.put("/:id/accept", protect, acceptRequest);
router.put("/:id/reject", protect, rejectRequest);

export default router;