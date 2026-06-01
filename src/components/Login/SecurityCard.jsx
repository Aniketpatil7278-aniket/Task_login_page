// src/components/Login/SecurityCard.jsx

import { ShieldCheck } from "lucide-react";

const SecurityCard = () => {
  return (
    <div className="mt-7 border border-[#d9eee8] bg-[#f8fffc] rounded-3xl p-5 flex gap-4">
      <ShieldCheck className="text-[#10B981]" />

      <div>
        <h3 className="font-bold">Secure & HIPAA Ready</h3>

        <p className="text-[#666]">
          Your healthcare information is protected with enterprise-grade
          encryption and secure authentication.
        </p>
      </div>
    </div>
  );
};

export default SecurityCard;
