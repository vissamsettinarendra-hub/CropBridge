import Order from "../models/Order.js";

// ====================================
// Get Farmer Orders
// ====================================

export const getFarmerOrders = async (req, res) => {
  try {
    // Only farmers can view farmer orders
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
        "cropName category quantity price location image status"
      )
      .populate(
        "factory",
        "name email phone address"
      )
      .populate(
        "request",
        "requestedQuantity offeredPrice status message"
      )
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(
      "GET FARMER ORDERS ERROR:",
      error
    );

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
    // Only factories can view factory orders
    if (req.user.role !== "factory") {
      return res.status(403).json({
        success: false,
        message:
          "Only factories can view factory orders.",
      });
    }

    const orders = await Order.find({
      factory: req.user._id,
    })
      .populate(
        "crop",
        "cropName category quantity price location image status"
      )
      .populate(
        "farmer",
        "name email phone address"
      )
      .populate(
        "request",
        "requestedQuantity offeredPrice status message"
      )
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(
      "GET FACTORY ORDERS ERROR:",
      error
    );

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
    const order = await Order.findById(
      req.params.id
    )
      .populate(
        "crop",
        "cropName category quantity price location image status"
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

    // Check order
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // ====================================
    // Authorization
    // ====================================

    const userId = req.user._id.toString();

    const farmerId =
      order.farmer?._id?.toString();

    const factoryId =
      order.factory?._id?.toString();

    const isFarmer =
      farmerId === userId;

    const isFactory =
      factoryId === userId;

    const isAdmin =
      req.user.role === "admin";

    if (
      !isFarmer &&
      !isFactory &&
      !isAdmin
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to view this order.",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(
      "GET ORDER ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Update Order Status
// ====================================

export const updateOrderStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    // ====================================
    // Allowed Statuses
    // ====================================

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
        message:
          "Invalid order status.",
      });
    }

    // ====================================
    // Find Order
    // ====================================

    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // ====================================
    // Authorization
    // ====================================

    const userId = req.user._id.toString();

    const farmerId =
      order.farmer.toString();

    const factoryId =
      order.factory.toString();

    const isFarmer =
      farmerId === userId;

    const isFactory =
      factoryId === userId;

    const isAdmin =
      req.user.role === "admin";

    if (
      !isFarmer &&
      !isFactory &&
      !isAdmin
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to update this order.",
      });
    }

    // ====================================
    // Update Status
    // ====================================

    order.orderStatus = status;

    await order.save();

    return res.status(200).json({
      success: true,
      message:
        "Order status updated successfully.",
      order,
    });
  } catch (error) {
    console.error(
      "UPDATE ORDER STATUS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};    