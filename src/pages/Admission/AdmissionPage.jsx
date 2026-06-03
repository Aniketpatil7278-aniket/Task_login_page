// src/pages/PatientAdmission/PatientAdmissionForm.jsx

import { useState } from "react";
import { Formik, Form } from "formik";

import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { User, Phone, Mail, HeartPulse } from "lucide-react";

import LockIcon from "@mui/icons-material/Lock";

const AdmissionPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    patientName: "",
    userid: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    disease: "",
    doctor: "",
    admissionDate: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Paper elevation={3} className="max-w-5xl mx-auto p-8 rounded-3xl">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Patient Admission Form
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Fill patient details for hospital admission.
        </Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <div className="grid md:grid-cols-2 gap-5">
                {/* Patient Name */}
                <TextField
                  fullWidth
                  label="Patient Name"
                  name="patientName"
                  value={values.patientName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <User size={18} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* User ID */}
                <TextField
                  fullWidth
                  label="User ID"
                  name="userid"
                  value={values.userid}
                  onChange={handleChange}
                />

                {/* Email */}
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={18} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Phone */}
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone size={18} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Password */}
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  InputProps={{
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
                  }}
                />

                {/* Confirm Password */}
                <TextField
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
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
                  }}
                />

                {/* Gender */}
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>

                {/* DOB */}
                <TextField
                  fullWidth
                  type="date"
                  label="Date Of Birth"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                {/* Blood Group */}
                <TextField
                  select
                  fullWidth
                  label="Blood Group"
                  name="bloodGroup"
                  value={values.bloodGroup}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Blood Group</MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                </TextField>

                {/* Address */}
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                />

                {/* City */}
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />

                {/* State */}
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                />

                {/* Pincode */}
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                />

                {/* Emergency Contact */}
                <TextField
                  fullWidth
                  label="Emergency Contact Name"
                  name="emergencyContactName"
                  value={values.emergencyContactName}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  label="Emergency Contact Number"
                  name="emergencyContactNumber"
                  value={values.emergencyContactNumber}
                  onChange={handleChange}
                />

                {/* Disease */}
                <TextField
                  fullWidth
                  label="Disease / Symptoms"
                  name="disease"
                  value={values.disease}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HeartPulse size={18} />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Doctor */}
                <TextField
                  fullWidth
                  label="Doctor Assigned"
                  name="doctor"
                  value={values.doctor}
                  onChange={handleChange}
                />

                {/* Admission Date */}
                <TextField
                  fullWidth
                  type="date"
                  label="Admission Date"
                  name="admissionDate"
                  value={values.admissionDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 4,
                  height: 55,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Submit Admission
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default AdmissionPage;
