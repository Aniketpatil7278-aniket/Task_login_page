import * as Yup from "yup";

export const signupSchema = Yup.object({
  fullname: Yup.string().required("Full Name is required"),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone Number is required")
    .min(10, "Phone Number must be at least 10 digits"),

  userid: Yup.string()
    .required("User ID is required")
    .min(5, "User ID must be at least 5 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
