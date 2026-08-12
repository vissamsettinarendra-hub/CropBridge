import Order from "../models/Order.js";

// ====================================
// Get Farmer Orders
// ====================================

export const getFarmerOrders = async (req, res) => {
  try {
    if (req.user.role !== "farmer") {
      return res.status(403).json({
        success: false,
        message: "Only farmers can view farmer orders.",
      });
    }

    const orders = await Order.find({
      farmer: req.user._id,
    })
      .populate(
        "crop",
        "cropName category quantity price location image"
      )
      .populate(
        "factory",
        "name email phone address"
      )
      .populate(
        "request",
        "requestedQuantity offeredPrice status"
      )
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("GET FARMER ORDERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Factory Orders
// ====================================

export const getFactoryOrders = async (req, res) => {
  try {
    if (req.user.role !== "factory") {
      return res.status(403).json({
        success: false,
        message: "Only factories can view factory orders.",
      });
    }

    const orders = await Order.find({
      factory: req.user._id,
    })
      .populate(
        "crop",
        "cropName category quantity price location image"
      )
      .populate(
        "farmer",
        "name email phone address"
      )
      .populate(
        "request",
        "requestedQuantity offeredPrice status"
      )
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("GET FACTORY ORDERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Single Order
// ====================================

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate(
        "crop",
        "cropName category quantity price location image"
      )
      .populate(
        "farmer",
        "name email phone address"
      )
      .populate(
        "factory",
        "name email phone address"
      )
      .populate(
        "request",
        "requestedQuantity offeredPrice status message"
      );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // Only farmer or factory involved in order can view it
    const userId = req.user._id.toString();

    const isFarmer =
      order.farmer._id.toString() === userId;

    const isFactory =
      order.factory._id.toString() === userId;

    if (!isFarmer && !isFactory && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view this order.",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("GET ORDER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ====================================
// Update Order Status
// ====================================

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Confirmed",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status.",
      });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }
    const userId = req.user._id.toString();
    const isFarmer =
      order.farmer.toString() === userId;

    const isFactory =
      order.factory.toString() === userId;

    if (!isFarmer && !isFactory && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to update this order.",
      });
    }

    order.orderStatus = status;

    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully.",
      order,
    });
  } catch (error) {
    console.error("UPDATE ORDER STATUS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};