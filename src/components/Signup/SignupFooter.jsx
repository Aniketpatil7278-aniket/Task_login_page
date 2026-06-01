// src/components/Signup/SignupFooter.jsx

import { Link } from "react-router-dom";

const SignupFooter = () => {
  return (
    <div className="text-center mt-7">
      <p className="text-[#666]">
        Already have an account?{" "}
        <Link to="/" className="text-[#10B981] font-bold hover:underline">
          Login
        </Link>
      </p>

      <p className="text-sm text-gray-400 mt-3">
        Privacy Policy · Terms of Service
      </p>
    </div>
  );
};

export default SignupFooter;
