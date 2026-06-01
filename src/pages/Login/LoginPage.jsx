// src/pages/Login/LoginPage.jsx

import LoginBanner from "../../components/Login/LoginBanner";
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e0e0e] overflow-hidden md:p-3">
      <div className="w-full min-h-screen bg-white md:rounded-[30px] overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <LoginBanner />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
