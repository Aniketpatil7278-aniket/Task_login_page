// src/services/authApi.js

import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users";

export const loginUserApi = async (userData) => {
  try {
    // Validation
    if (!userData?.userid?.trim()) {
      throw new Error("User ID or Phone Number is required");
    }

    if (!userData?.password?.trim()) {
      throw new Error("Password is required");
    }

    // API Call
    const response = await axios.get(BASE_URL);

    const loginValue = userData.userid.trim().toLowerCase();

    // Find user by UserID OR Phone Number
    const user = response.data.find(
      (item) =>
        item.userid.toLowerCase() === loginValue ||
        String(item.phone) === loginValue,
    );

    if (!user) {
      throw new Error("User ID or Phone Number not found");
    }

    // Password Check
    if (user.password !== userData.password) {
      throw new Error("Invalid Password");
    }

    return user;
  } catch (error) {
    throw new Error(error.message || "Login Failed", { cause: error });
  }
};
