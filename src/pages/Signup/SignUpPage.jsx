// src/pages/Signup/SignUpPage.jsx

import { Formik, Form } from "formik";
import { TextField, Button, InputAdornment, Paper } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import { signupSchema } from "./signupSchema";
import SignupFooter from "../../components/Signup/SignupFooter";

const SignUpPage = () => {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    userid: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log("Signup Data:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f8] p-4">
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: 4,
          borderRadius: 4,
        }}
      >
        <h1 className="text-4xl font-bold mb-2">Create Account</h1>

        <p className="text-gray-500 mb-8">Create your healthcare account.</p>

        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className="space-y-5">
              <TextField
                fullWidth
                label="Full Name"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullname && Boolean(errors.fullname)}
                helperText={touched.fullname && errors.fullname}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                fullWidth
                label="User ID"
                name="userid"
                value={values.userid}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.userid && Boolean(errors.userid)}
                helperText={touched.userid && errors.userid}
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
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
                  },
                }}
              />

              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  height: "55px",
                  borderRadius: "16px",
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Create Account
              </Button>
            </Form>
            
          )}
        </Formik> <SignupFooter />
      </Paper>
    </div>
  );
};

export default SignUpPage;
