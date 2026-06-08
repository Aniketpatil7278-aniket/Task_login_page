// src/components/Login/LoginForm.jsx

import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  IconButton,
  Alert,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import { User } from "lucide-react";

import { loginSchema } from "../../pages/Login/loginSchema";
import { loginRequest } from "../../state-management/authorization/authActions";
import logo from "../../assets/logo.png";

import SecurityCard from "./SecurityCard";
import LoginFooter from "./LoginFooter";

const LoginForm = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  const [showPasswordField, setShowPasswordField] = useState(false);

  const [showPassword, setShowPassword] = useState(false);



  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const initialValues = {
    userid: "",
    password: "",
  };

  const handleSubmit = (values) => {
    if (!showPasswordField) {
      setShowPasswordField(true);
      return;
    }

    dispatch(loginRequest(values));
  };

  return (
    <div className="flex items-center justify-center px-5 sm:px-8 md:px-14 py-10 bg-white">
      <div className="w-full max-w-[520px]">
        <div className="flex mb-5">
          <img src={logo} alt="Company Logo" className="w-[150px]" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#111]">
          Welcome back
        </h1>

        <p className="text-[#666] mt-3 mb-8">
          Continue securely using your phone number or Unique ID.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema(showPasswordField)}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form className="space-y-5">
              <div>
                <label className="block mb-2 font-semibold">
                  Unique ID or Phone Number
                </label>

                <TextField
                  fullWidth
                  name="userid"
                  placeholder="Unique ID or Phone Number"
                  value={values.userid}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.userid && Boolean(errors.userid)}
                  helperText={touched.userid && errors.userid}
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

              {showPasswordField && (
                <div>
                  <label className="block mb-2 font-semibold">Password</label>

                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeyIcon
                              sx={{
                                fontSize: 18,
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
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
              )}

              {error && <Alert severity="error">{error}</Alert>}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  height: "58px",
                  borderRadius: "18px",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                {loading ? (
                  <CircularProgress size={22} color="inherit" />
                ) : showPasswordField ? (
                  "Login"
                ) : (
                  "Continue"
                )}
              </Button>

            </Form>
          )}
        </Formik>

        <SecurityCard />

        <LoginFooter />
      </div>
    </div>
  );
};

export default LoginForm;
