import * as Yup from "yup";

export const signupSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),

  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Enter valid phone number"),

  userType: Yup.string().required("User Type is required"),

  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),

  confirmPassword: Yup.string()
    .trim()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  terms: Yup.boolean().oneOf([true], "Accept Terms & Conditions"),
});
