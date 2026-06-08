// src/components/PatientAdmission/PatientForm.jsx

import { Formik, Form } from "formik";
import { useState } from "react";
import { TextField, Button, MenuItem, Typography, InputAdornment} from "@mui/material";
import {AdmissionSchema} from "../../pages/Admission/AdmissionSchema";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const PatientForm = () => {
  const initialValues = {
    patientName: "",
    userid: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    bloodGroup: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyName: "",
    emergencyPhone: "",
    disease: "",
    doctor: "",
    admissionDate: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("PatientForm Submit Sucessfull");
    resetForm();
  };

  const [showPassword , setShowPassword]=useState(false);
  const [showConfirmPassword , setShowConfirmPassword]=useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AdmissionSchema}
    >
      {({ values, handleChange, errors, touched, handleBlur }) => (
        <Form className="space-y-8">
          {/* BASIC INFORMATION */}
          <div>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Basic Information
            </Typography>

            <div className="grid md:grid-cols-2 gap-5">
              <TextField
                fullWidth
                label="Patient Name *"
                name="patientName"
                value={values.patientName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.patientName && Boolean(errors.patientName)}
                helperText={touched.patientName && errors.patientName}
              />

              <TextField
                fullWidth
                label="User ID *"
                name="userid"
                value={values.userid}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.userid && Boolean(errors.userid)}
                helperText={touched.userid && errors.userid}
              />

              <TextField
                fullWidth
                label="Email *"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                label="Phone Number *"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Password *"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                slotProps={{
                  input: {
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

              <TextField
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password *"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                slotProps={{
                  input: {
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

              <TextField
                select
                fullWidth
                label="Gender *"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>

             

              <TextField
                select
                fullWidth
                label="Blood Group *"
                name="bloodGroup"
                value={values.bloodGroup}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.bloodGroup && Boolean(errors.bloodGroup)}
                helperText={touched.bloodGroup && errors.bloodGroup}
              >
                <MenuItem value="">Select Blood Group</MenuItem>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
              </TextField>
            </div>
          </div>

          {/* ADDRESS INFORMATION */}
          <div>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Address Information
            </Typography>

            <div className="grid md:grid-cols-2 gap-5">
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Address *"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
              />

              <TextField
                fullWidth
                label="City *"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.city && Boolean(errors.city)}
                helperText={touched.city && errors.city}
              />

              <TextField
                fullWidth
                label="State *"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.state && Boolean(errors.state)}
                helperText={touched.state && errors.state}
              />

              <TextField
                fullWidth
                label="Pincode *"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode && Boolean(errors.pincode)}
                helperText={touched.pincode && errors.pincode}
              />
            </div>
          </div>

          {/* MEDICAL INFORMATION */}
          <div>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Medical Information
            </Typography>

            <div className="grid md:grid-cols-2 gap-5">
              <TextField
                fullWidth
                label="Emergency Contact Name"
                name="emergencyName"
                value={values.emergencyName}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Emergency Contact Number"
                name="emergencyPhone"
                value={values.emergencyPhone}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Disease / Symptoms *"
                name="disease"
                value={values.disease}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.disease && Boolean(errors.disease)}
                helperText={touched.disease && errors.disease}
              />

              <TextField
                fullWidth
                label="Doctor Assigned"
                name="doctor"
                value={values.doctor}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                type="date"
                label="Admission Date *"
                name="admissionDate"
                value={values.admissionDate}
                onChange={handleChange}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              height: 55,
              borderRadius: "14px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Submit Admission
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PatientForm;
