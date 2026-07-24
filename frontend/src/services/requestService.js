const API = "http://localhost:5000/api/requests";

// =============================
// Send Request
// =============================

export const sendRequest = async (requestData) => {

  try {

    const response = await fetch(API, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    return await response.json();

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };

  }

};

// =============================
// Factory Requests
// =============================

export const getFactoryRequests = async () => {

  try {

    const response = await fetch(`${API}/factory`, {
      credentials: "include",
    });

    return await response.json();

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };

  }

};

// =============================
// Farmer Requests
// =============================

export const getFarmerRequests = async () => {

  try {

    const response = await fetch(`${API}/farmer`, {
      credentials: "include",
    });

    return await response.json();

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };

  }

};

// =============================
// Accept Request
// =============================

export const acceptRequest = async (id) => {

  try {

    const response = await fetch(`${API}/${id}/accept`, {
      method: "PUT",
      credentials: "include",
    });

    return await response.json();

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };

  }

};

// =============================
// Reject Request
// =============================

export const rejectRequest = async (id) => {

  try {

    const response = await fetch(`${API}/${id}/reject`, {
      method: "PUT",
      credentials: "include",
    });

    return await response.json();

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };

  }

};