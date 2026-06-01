

import { Formik, Form,  } from "formik";
import { TextField, Button, InputAdornment } from "@mui/material";
import { User, ShieldCheck } from "lucide-react";

import { loginSchema } from "./loginSchema";
import { loginRequest } from "../../state-management/authurization/authActions";
import logo from "../../assets/logo.png";



const LoginPage = () => {
  const initialValues = {
    userid: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);

    loginRequest(values);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f6f8] overflow-hidden md:p-3">
      <div className="w-full min-h-screen bg-white md:rounded-[30px] overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-between bg-gradient-to-b from-[#10998D] to-[#22C55E] text-white p-12 lg:p-16">
            <div>
              {/* TOP TAG */}
              <div className="inline-block px-5 py-2 rounded-full border border-white/30 bg-white/10 text-sm mb-10 shadow-[0_8px_25px_rgba(255,255,255,0.15)] backdrop-blur-md">
                AI Powered Telemedicine Platform
              </div>

              {/* TITLE */}
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight max-w-[600px] mb-6">
                One Secure Access For Every Healthcare User
              </h1>

              {/* DESCRIPTION */}
              <p className="text-white/90 text-lg leading-8 max-w-[550px]">
                Patients, doctors, pharmacies, laboratories, and insurance
                providers connected through one intelligent healthcare
                ecosystem.
              </p>
            </div>

            {/* BOTTOM CARDS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                {
                  title: "24/7",
                  sub: "Healthcare Access",
                },
                {
                  title: "100%",
                  sub: "Encrypted Login",
                },
                {
                  title: "AI",
                  sub: "AI Access",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[160px] bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-5"
                >
                  <h2 className="text-3xl font-bold">{item.title}</h2>

                  <p className="mt-2 text-white/90">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center px-5 sm:px-8 md:px-14 py-10 bg-white">
            <div className="w-full max-w-[520px]">
              {/* LOGO */}
              <div className="flex  mb-5">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[150px] object-contain"
                />
              </div>

              {/* HEADING */}
              <h1 className="text-4xl md:text-6xl font-bold text-[#111] text-center md:text-left">
                Welcome back
              </h1>

              <p className="text-[#666] mt-3 mb-8 leading-7 text-center md:text-left">
                Continue securely using your phone number or Unique ID.
              </p>

              {/* FORM */}
              <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleChange, handleBlur, values }) => (
                  <Form className="space-y-5">
                    {/* USER ID */}
                    <div>
                      <label className="block mb-2 font-semibold text-[#222]">
                        Unique ID or Phone Number
                      </label>

                      {/* MUI TextField + Tailwind */}
                      <TextField
                        fullWidth
                        type="text"
                        name="userid"
                        placeholder="Unique ID or Phone Number"
                        value={values.userid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.userid && Boolean(errors.userid)}
                        helperText={touched.userid && errors.userid}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <User size={18} className="text-gray-400" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            height: "58px",
                            borderRadius: "18px",
                            background: "#fafafa",
                          },
                        }}
                      />
                    </div>

                    {/* BUTTON */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        height: "58px",
                        borderRadius: "18px",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "16px",
                        background: "linear-gradient(90deg,#14B8A6,#10B981)",
                        boxShadow: "0 10px 20px rgba(16,185,129,0.25)",
                        "&:hover": {
                          background: "linear-gradient(90deg,#0F9E8B,#0EA56D)",
                        },
                      }}
                    >
                      Continue
                    </Button>
                  </Form>
                )}
              </Formik>

              {/* SECURITY BOX */}
              <div className="mt-7 border border-[#d9eee8] bg-[#f8fffc] rounded-3xl p-5 flex gap-4">
                <ShieldCheck className="text-[#10B981] min-w-[24px]" />

                <div>
                  <h3 className="font-bold text-[#111]">
                    Secure & HIPAA Ready
                  </h3>

                  <p className="text-[#666] leading-7 mt-1">
                    Your healthcare information is protected with
                    enterprise-grade encryption and secure authentication.
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="text-center mt-7">
                <p className="text-[#666]">
                  Don’t have an account?{" "}
                  <span className="text-[#10B981] font-bold cursor-pointer">
                    Sign up
                  </span>
                </p>

                <p className="text-sm text-gray-400 mt-3">
                  Privacy Policy · Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;