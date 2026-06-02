// src/pages/Signup/SignUpPage.jsx

import SignupHeader from "../../components/Signup/SignupHeader";
import SignupForm from "../../components/Signup/SignupForm";
import SignupSecurityCard from "../../components/Signup/SignupSecurityCard";
import SignupFooter from "../../components/Signup/SignupFooter";

import background from "../../assets/backgroundimg.avif";

const SignUpPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ),
          url(${background})
        `,
      }}
    >
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-[32px] shadow-2xl p-8 md:p-12 lg:p-14">
        {/* Header */}
        <SignupHeader />

        {/* Form */}
        <div className="mt-8">
          <SignupForm />
        </div>

        {/* Security Card */}
        <div className="mt-10">
          <SignupSecurityCard />
        </div>

        {/* Footer */}
        <div className="mt-8">
          <SignupFooter />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
