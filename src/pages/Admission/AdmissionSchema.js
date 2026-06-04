import * as Yup from "yup";

export const AdmissionSchema = Yup.object({
  patientName: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters "),

  userid: Yup.string()
    .required("Userid is requird")
    .min(5, "Userid must be at least 5 characters")
    .max(10, "Userid must be 10 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "User ID can contain only letters, numbers, and underscores",
    ),

  email: Yup.string()
    .email("Enter the valid Email")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("Password")], "Password must match")
    .required("Confirm Password is required"),

  gender: Yup.string().required("Gender is required"),

  bloodGroup: Yup.string().required("BloodGroup is required"),

  address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 charactres")
    .max(200, "Address must be exceed 200 characters"),

  city: Yup.string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .max(50, "City must not exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "City can contains only letters and spaces"),

  state: Yup.string()
    .required("State is required")
    .min(2, "State must be at least 2 characters")
    .max(50, "State mus not exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "state can contains only letters and spaces"),

  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9][0-9]{5}$/, "Enter the valid pincode"),

  disease: Yup.string()
    .required("Disease is required")
    .min(2, "Disease name must be at least 2 characters")
    .max(500, "Disease name must not exceed 100 characters"),
});
