import * as Yup from "yup";
export const loginSchema = Yup.object({
  userid:Yup.string().required("Enter the correct Unique ID or Phone Number"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),

});
