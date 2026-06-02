// src/components/Signup/SignupSecurityCard.jsx

import { ShieldCheck } from "lucide-react";

const SignupSecurityCard = () => {
  return (
    <div className="border border-green-200 rounded-3xl px-6 py-5 flex items-center justify-between bg-[#f8fffc]">
      {/* LEFT ICON */}
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <ShieldCheck size={32} className="text-green-600" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-5">
        <h3 className="text-xl font-bold text-[#0f172a]">
          Secure & HIPAA Ready
        </h3>

        <p className="text-gray-600 text-base leading-relaxed mt-1">
          Your healthcare information is protected with enterprise-grade
          encryption and security.
        </p>
      </div>

      {/* RIGHT ICON */}
      <div className="flex-shrink-0">
        <ShieldCheck size={42} className="text-green-600" strokeWidth={1.8} />
      </div>
    </div>
  );
};

export default SignupSecurityCard;
