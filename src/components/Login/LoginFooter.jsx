// src/components/Login/LoginFooter.jsx

import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <div className="text-center mt-7">
      <p className="text-[#666]">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-[#10B981] font-bold hover:underline">
          Sign up
        </Link>
      </p>

      <p className="text-sm text-gray-400 mt-3">
        Privacy Policy · Terms of Service
      </p>
    </div>
  );
};

export default LoginFooter;
