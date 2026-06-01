// src/pages/Login/loginSchema.js

import * as Yup from "yup";

export const loginSchema = (showPassword) =>
  Yup.object({
    userid: Yup.string()
      .required("User ID is required")
      .min(5, "User ID must be at least 5 characters"),

    password: showPassword
      ? Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
      : Yup.string(),
  });
