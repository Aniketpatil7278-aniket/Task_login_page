// src/services/authApi.js

import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users";

export const loginUserApi = async (userData) => {
  try {
    // Validation
    if (!userData?.userid?.trim()) {
      throw new Error("User ID is required");
    }

    if (!userData?.password?.trim()) {
      throw new Error("Password is required");
    }

    // API Call
    const response = await axios.get(BASE_URL);

    const userid = userData.userid.trim().toLowerCase();

    // Find User
    const user = response.data.find(
      (item) => item.userid.toLowerCase() === userid,
    );

    if (!user) {
      throw new Error("User ID not found");
    }

    // Password Check
    if (user.password !== userData.password) {
      throw new Error("Invalid Password");
    }

    // const { password: _password, ...safeUser } = user;

    // return safeUser;
  } catch (error) {
    throw new Error(error.message || "Login Failed", { cause: error });
  }
};
