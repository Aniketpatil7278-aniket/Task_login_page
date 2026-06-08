// src/components/Signup/SignupForm.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";

import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { User, Phone, UserPlus } from "lucide-react";

import LockIcon from "@mui/icons-material/Lock";

import { signupSchema } from "../../pages/Signup/signupSchema";

const SignupForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [success, setSuccess] = useState(false);

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    userType: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Signup Data:", values);

    setSuccess(true);

    resetForm();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form className="space-y-6">
            {/* FULL NAME */}
            <div>
              <label className="font-semibold block mb-2">Full Name *</label>

              <TextField
                fullWidth
                name="fullName"
                placeholder="Enter your full name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <User size={18} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            {/* PHONE NUMBER */}
            <div>
              <label className="font-semibold block mb-2">Phone Number *</label>

              <TextField
                fullWidth
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone size={18} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            {/* USER TYPE */}
            <div>
              <label className="font-semibold block mb-2">User Type *</label>

              <TextField
                select
                fullWidth
                name="userType"
                value={values.userType}
                onChange={handleChange}
                error={touched.userType && Boolean(errors.userType)}
                helperText={touched.userType && errors.userType}
              >
                <MenuItem value="" disabled>
                  Select user type
                </MenuItem>
                <MenuItem value="Patient">Patient</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Pharmacy">Pharmacy</MenuItem>
                <MenuItem value="Laboratory">Laboratory</MenuItem>
              </TextField>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-semibold block mb-2">Password *</label>

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="font-semibold block mb-2">
                Confirm Password *
              </label>

              <TextField
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </div>

            {/* TERMS */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.terms}
                  onChange={(e) => setFieldValue("terms", e.target.checked)}
                />
              }
              label={
                <span>
                  I agree to the
                  <span className="text-green-600 font-semibold">
                    {" "}
                    Terms & Conditions
                  </span>{" "}
                  and
                  <span className="text-green-600 font-semibold">
                    {" "}
                    Privacy Policy
                  </span>
                </span>
              }
            />

            {/* SUBMIT BUTTON */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              startIcon={<UserPlus />}
              sx={{
                height: 60,
                borderRadius: "16px",
                textTransform: "none",
                fontSize: "20px",
                fontWeight: 700,
                background: "linear-gradient(90deg,#14B8A6,#10B981)",
              }}
            >
              Create Account
            </Button>

            {/* LOGIN LINK */}
            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/" className="text-green-600 font-bold">
                  Sign In
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
      {success && (
        <Alert severity="success" variant="filled" sx={{ mb: 2 }}>
          Account Created Successfully!
        </Alert>
      )}
    </>
  );
};

export default SignupForm;
