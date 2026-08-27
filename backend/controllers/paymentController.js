import Payment from "../models/Payment.js";
import Order from "../models/Order.js";

// ====================================
// Create Payment
// ====================================

export const createPayment = async (req, res) => {
  try {
    // Only factory can make payment
    if (req.user.role !== "factory") {
      return res.status(403).json({
        success: false,
        message: "Only factories can make payments.",
      });
    }

    const {
      orderId,
      paymentMethod,
      transactionId,
      notes,
    } = req.body;

    // ====================================
    // Validate Order ID
    // ====================================

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Order ID is required.",
      });
    }

    // ====================================
    // Find Order
    // ====================================

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // ====================================
    // Check Factory Ownership
    // ====================================

    if (
      order.factory.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to pay for this order.",
      });
    }

    // ====================================
    // Order Must Be Delivered
    // ====================================

    if (order.orderStatus !== "Delivered") {
      return res.status(400).json({
        success: false,
        message:
          "Payment can only be made after the order is delivered.",
      });
    }

    // ====================================
    // Check Order Payment Status
    // ====================================

    if (order.paymentStatus === "Paid") {
      return res.status(400).json({
        success: false,
        message:
          "Payment has already been completed for this order.",
      });
    }

    // ====================================
    // Check Existing Payment
    // ====================================

    const existingPayment =
      await Payment.findOne({
        order: order._id,
      });

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message:
          "Payment already exists for this order.",
        payment: existingPayment,
      });
    }

    // ====================================
    // Validate Payment Method
    // ====================================

    const allowedMethods = [
      "Cash",
      "UPI",
      "Bank Transfer",
      "Online",
    ];

    const method =
      paymentMethod || "Online";

    if (!allowedMethods.includes(method)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method.",
      });
    }

    // ====================================
    // Create Payment
    // ====================================

    const payment = await Payment.create({
      order: order._id,

      farmer: order.farmer,

      factory: order.factory,

      amount: order.totalAmount,

      paymentMethod: method,

      paymentStatus: "Paid",

      transactionId:
        transactionId || "",

      paidAt: new Date(),

      notes: notes || "",
    });

    // ====================================
    // Update Order Payment Status
    // ====================================

    order.paymentStatus = "Paid";

    await order.save();

    // ====================================
    // Response
    // ====================================

    return res.status(201).json({
      success: true,

      message:
        "Payment completed successfully.",

      payment,

      order,
    });
  } catch (error) {
    console.error(
      "CREATE PAYMENT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Factory Payments
// ====================================

export const getFactoryPayments = async (
  req,
  res
) => {
  try {
    // Only factory
    if (req.user.role !== "factory") {
      return res.status(403).json({
        success: false,
        message:
          "Only factories can view factory payments.",
      });
    }

    const payments =
      await Payment.find({
        factory: req.user._id,
      })
        .populate(
          "order",
          "quantity pricePerKg totalAmount orderStatus paymentStatus crop"
        )
        .populate(
          "order.crop",
          "cropName category"
        )
        .populate(
          "farmer",
          "name email phone address"
        )
        .sort({
          createdAt: -1,
        });

    return res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    console.error(
      "GET FACTORY PAYMENTS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Farmer Payments
// ====================================

export const getFarmerPayments = async (
  req,
  res
) => {
  try {
    // Only farmer
    if (req.user.role !== "farmer") {
      return res.status(403).json({
        success: false,
        message:
          "Only farmers can view farmer payments.",
      });
    }

    const payments =
      await Payment.find({
        farmer: req.user._id,
      })
        .populate(
          "order",
          "quantity pricePerKg totalAmount orderStatus paymentStatus crop"
        )
        .populate(
          "order.crop",
          "cropName category"
        )
        .populate(
          "factory",
          "name email phone address"
        )
        .sort({
          createdAt: -1,
        });

    return res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    console.error(
      "GET FARMER PAYMENTS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Payment By ID
// ====================================

export const getPaymentById = async (
  req,
  res
) => {
  try {
    const payment =
      await Payment.findById(req.params.id)
        .populate(
          "order",
          "quantity pricePerKg totalAmount orderStatus paymentStatus crop"
        )
        .populate(
          "order.crop",
          "cropName category"
        )
        .populate(
          "farmer",
          "name email phone address"
        )
        .populate(
          "factory",
          "name email phone address"
        );

    // ====================================
    // Check Payment
    // ====================================

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found.",
      });
    }

    // ====================================
    // Authorization
    // ====================================

    const userId =
      req.user._id.toString();

    const farmerId =
      payment.farmer?._id?.toString();

    const factoryId =
      payment.factory?._id?.toString();

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
          "You are not authorized to view this payment.",
      });
    }

    return res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error(
      "GET PAYMENT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ====================================
// Get Factory Unpaid Orders
// ====================================

export const getFactoryUnpaidOrders =
  async (req, res) => {
    try {
      // Only factory
      if (req.user.role !== "factory") {
        return res.status(403).json({
          success: false,
          message:
            "Only factories can view unpaid orders.",
        });
      }

      const orders =
        await Order.find({
          factory: req.user._id,

          orderStatus: "Delivered",

          paymentStatus: "Pending",
        })
          .populate(
            "crop",
            "cropName category location"
          )
          .populate(
            "farmer",
            "name email phone"
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
        "GET FACTORY UNPAID ORDERS ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }; 

  