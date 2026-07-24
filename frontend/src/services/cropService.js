const API = "http://localhost:5000/api/crops";

// ==========================
// Add Crop
// ==========================

export const addCrop = async (cropData) => {
  try {
    const response = await fetch(API, {
      method: "POST",
      credentials: "include",
      body: cropData,
    });

    return await response.json();
  } catch (error) {
    console.error("ADD CROP ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server.",
    };
  }
};

// ==========================
// Get My Crops
// ==========================

export const getMyCrops = async () => {
  try {
    const response = await fetch(`${API}/my/crops`, {
      method: "GET",
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("GET MY CROPS ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server.",
    };
  }
};

// ==========================
// Get All Crops
// ==========================

export const getAllCrops = async () => {
  try {
    const response = await fetch(API, {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    console.error("GET ALL CROPS ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server.",
    };
  }
};

// ==========================
// Get Crop By ID
// ==========================

export const getCropById = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    console.error("GET CROP ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server.",
    };
  }
};

// ==========================
// Update Crop
// ==========================

export const updateCrop = async (id, cropData) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      credentials: "include",
      body: cropData,
    });

    return await response.json();
  } catch (error) {
    console.error("UPDATE CROP ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server.",
    };
  }
};

// ==========================
// Delete Crop
// ==========================

export const deleteCrop = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("DELETE CROP ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server.",
    };
  }
};