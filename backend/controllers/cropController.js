import Crop from "../models/Crop.js";

// ======================================
// Add Crop
// ======================================

export const addCrop = async (req, res) => {
  try {
    const {
      cropName,
      category,
      quantity,
      price,
      harvestDate,
      location,
      description,
    } = req.body;

    const crop = await Crop.create({
      farmer: req.user._id,
      cropName,
      category,
      quantity,
      price,
      harvestDate,
      location,
      description,
      image: req.file ? req.file.filename : "",
    });

    return res.status(201).json({
      success: true,
      message: "Crop Added Successfully",
      crop,
    });

  } catch (error) {
    console.error("ADD CROP ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get All Crops
// ======================================

export const getAllCrops = async (req, res) => {
  try {

    const crops = await Crop.find()
      .populate("farmer", "name phone")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: crops.length,
      crops,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Get My Crops
// ======================================

export const getMyCrops = async (req, res) => {
  try {

    const crops = await Crop.find({
      farmer: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: crops.length,
      crops,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Get Crop By ID
// ======================================

export const getCropById = async (req, res) => {
  try {

    const crop = await Crop.findById(req.params.id)
      .populate("farmer", "name phone email");

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }

    return res.status(200).json({
      success: true,
      crop,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Update Crop
// ======================================

export const updateCrop = async (req, res) => {
  try {

    let crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }

    if (crop.farmer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (req.file) {
      req.body.image = req.file.filename;
    }

    crop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Crop Updated Successfully",
      crop,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// Delete Crop
// ======================================

export const deleteCrop = async (req, res) => {
  try {

    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }

    if (crop.farmer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await Crop.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Crop Deleted Successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};