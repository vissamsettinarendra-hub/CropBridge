const API = "http://localhost:5000/api/auth";

// Register
export const registerUser = async (userData) => {
  const response = await fetch(`${API}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
};

// Login
export const loginUser = async (userData) => {
  const response = await fetch(`${API}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
};

// Current User
export const getCurrentUser = async () => {
  const response = await fetch(`${API}/me`, {
    method: "GET",
    credentials: "include",
  });

  return await response.json();
};

// Logout
export const logoutUser = async () => {
  const response = await fetch(`${API}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return await response.json();
};