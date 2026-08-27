import Request from "../models/Request.js";
import Crop from "../models/Crop.js";
import Order from "../models/Order.js";

// ====================================
// Factory Sends Crop Request
// ====================================

export const sendRequest = async (req, res) => {
  try {
    const {
      cropId,
      requestedQuantity,
      offeredPrice,
      message,
    } = req.body;

    // Validate required fields
    if (!cropId || !requestedQuantity || !offeredPrice) {
      return res.status(400).json({
        success: false,
        message:
          "Crop, requested quantity and offered price are required.",
      });
    }

    // Check logged-in user role
    if (req.user.role !== "factory") {
      return res.status(403).json({
        success: false,
        message: "Only factories can send crop requests.",
      });
    }

    // Find crop
    const crop = await Crop.findById(cropId);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found.",
      });
    }

    // Crop should be available
    if (crop.status !== "Available") {
      return res.status(400).json({
        success: false,
        message: "This crop is not currently available.",
      });
    }

    // Validate quantity
    const quantity = Number(requestedQuantity);

    if (quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity must be greater than 0.",
      });
    }

    if (quantity > crop.quantity) {
      return res.status(400).json({
        success: false,
        message: `Only ${crop.quantity} Kg is available.`,
      });
    }

    // Validate offered price
    const price = Number(offeredPrice);

    if (price <= 0) {
      return res.status(400).json({
        success: false,
        message: "Offered price must be greater than 0.",
      });
    }

    // Prevent duplicate pending request
    const existingRequest = await Request.findOne({
      crop: crop._id,
      factory: req.user._id,
      status: "Pending",
    });

    if (existingRequest) {
      return res.status(400).json({
        success: false,
        message: "You already have a pending request for this crop.",
      });
    }

    // Create request
    const request = await Request.create({
      crop: crop._id,
      farmer: crop.farmer,
      factory: req.user._id,
      requestedQuantity: quantity,
      offeredPrice: price,
      message: message || "",
      status: "Pending",
    });

    return res.status(201).json({
      success: true,
      message: "Crop request sent successfully.",
      request,
    });
  } catch (error) {
    console.error("SEND REQUEST ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Factory Requests
// ====================================

export const getFactoryRequests = async (req, res) => {
  try {
    if (req.user.role !== "factory") {
      return res.status(403).json({
        success: false,
        message: "Only factories can view factory requests.",
      });
    }

    const requests = await Request.find({
      factory: req.user._id,
    })
      .populate(
        "crop",
        "cropName category quantity price location image status"
      )
      .populate(
        "farmer",
        "name phone email address"
      )
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("GET FACTORY REQUESTS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Farmer Requests
// ====================================

export const getFarmerRequests = async (req, res) => {
  try {
    if (req.user.role !== "farmer") {
      return res.status(403).json({
        success: false,
        message: "Only farmers can view farmer requests.",
      });
    }

    const requests = await Request.find({
      farmer: req.user._id,
    })
      .populate(
        "crop",
        "cropName category quantity price location image status"
      )
      .populate(
        "factory",
        "name phone email address"
      )
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("GET FARMER REQUESTS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Accept Request + Create Order
// ====================================

export const acceptRequest = async (req, res) => {
  try {
    // Only farmer can accept
    if (req.user.role !== "farmer") {
      return res.status(403).json({
        success: false,
        message: "Only farmers can accept requests.",
      });
    }

    // Find request
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found.",
      });
    }

    // Check request belongs to logged-in farmer
    if (
      request.farmer.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to accept this request.",
      });
    }

    // Request must be pending
    if (request.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message:
          `Request is already ${request.status}.`,
      });
    }

    // Find crop
    const crop = await Crop.findById(request.crop);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found.",
      });
    }

    // Check quantity
    if (
      request.requestedQuantity >
      crop.quantity
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Requested quantity is no longer available.",
      });
    }

    // ====================================
    // Calculate total amount
    // ====================================

    const totalAmount =
      request.requestedQuantity *
      request.offeredPrice;

    // ====================================
    // Create Order
    // ====================================

    const order = await Order.create({
      crop: request.crop,

      farmer: request.farmer,

      factory: request.factory,

      request: request._id,

      quantity: request.requestedQuantity,

      pricePerKg: request.offeredPrice,

      totalAmount: totalAmount,

      orderStatus: "Pending",

      paymentStatus: "Pending",

      deliveryAddress: "",

      notes: request.message || "",
    });

    // ====================================
    // Update Request
    // ====================================

    request.status = "Accepted";

    await request.save();

    // ====================================
    // Update Crop
    // ====================================

    crop.status = "Requested";

    await crop.save();
    // ====================================
    // Reject Other Pending Requests
    // ====================================

    await Request.updateMany(
      {
        crop: request.crop,

        _id: {
          $ne: request._id,
        },

        status: "Pending",
      },
      {
        $set: {
          status: "Rejected",
        },
      }
    );
    // ====================================
    // Response
    // ====================================

    return res.status(200).json({
      success: true,

      message:
        "Request accepted and order created successfully.",

      request,

      order,
    });

  } catch (error) {

    console.error(
      "ACCEPT REQUEST ERROR:",
      error
    );

    return res.status(500).json({
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
    if (req.user.role !== "farmer") {
      return res.status(403).json({
        success: false,
        message: "Only farmers can reject requests.",
      });
    }

    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found.",
      });
    }

    // Make sure this farmer owns the request
    if (request.farmer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to reject this request.",
      });
    }

    if (request.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: `Request is already ${request.status}.`,
      });
    }

    request.status = "Rejected";

    await request.save();

    return res.status(200).json({
      success: true,
      message: "Crop request rejected successfully.",
      request,
    });
  } catch (error) {
    console.error("REJECT REQUEST ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};