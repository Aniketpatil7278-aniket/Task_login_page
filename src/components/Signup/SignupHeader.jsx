// src/components/Signup/SignupHeader.jsx
import logo from "../../assets/logo1.png";
import { ShieldCheck } from "lucide-react";
const SignupHeader = () =>{
    return (
      <>
        <div className="flex items-center justify-center gap-4 mb-10">
          <img
            src={logo}
            alt="Company Logo"
            className="w-[120px] md:w-[140px]"
          />

          <div>
            <h1 className="text-[42px] md:text-[42px] font-bold leading-none text-[#0B1B3B]">
              MediConnect
            </h1>

            <p className="text-[20px] md:text-[20px] font-semibold text-gray-500 mt-2">
              Healthcare Ecosystem
            </p>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-[42px] md:text-[35px] font-bold text-[#0B1B3B]">
              Create your account
            </h2>

            <ShieldCheck size={42} className="text-[#10B981]" />
          </div>

          <p className="text-gray-500 text-xl mt-4 leading-relaxed max-w-[650px]">
            Join the MediConnect ecosystem and access
            <span className="block">secure digital healthcare services.</span>
          </p>
        </div>
      </>
    );

};
export default SignupHeader;
