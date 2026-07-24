import Request from "../models/Request.js";
import Crop from "../models/Crop.js";

// ====================================
// Factory Sends Request
// ====================================

export const sendRequest = async (req, res) => {
  try {

    const { cropId, requestedQuantity, offeredPrice, message } = req.body;

    const crop = await Crop.findById(cropId);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }

    const request = await Request.create({
      crop: crop._id,
      farmer: crop.farmer,
      factory: req.user._id,
      requestedQuantity,
      offeredPrice,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Request Sent Successfully",
      request,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ====================================
// Factory Requests
// ====================================

export const getFactoryRequests = async (req, res) => {
  try {

    const requests = await Request.find({
      factory: req.user._id,
    })
      .populate("crop")
      .populate("farmer", "name phone");

    res.json({
      success: true,
      requests,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ====================================
// Farmer Requests
// ====================================

export const getFarmerRequests = async (req, res) => {
  try {

    const requests = await Request.find({
      farmer: req.user._id,
    })
      .populate("crop")
      .populate("factory", "name phone email");

    res.json({
      success: true,
      requests,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ====================================
// Accept Request
// ====================================

export const acceptRequest = async (req, res) => {
  try {

    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    request.status = "Accepted";

    await request.save();

    res.json({
      success: true,
      message: "Request Accepted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ====================================
// Reject Request
// ====================================

export const rejectRequest = async (req, res) => {
  try {

    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    request.status = "Rejected";

    await request.save();

    res.json({
      success: true,
      message: "Request Rejected",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};