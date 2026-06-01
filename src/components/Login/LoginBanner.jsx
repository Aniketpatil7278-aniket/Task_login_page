// src/components/Login/LoginBanner.jsx

const LoginBanner = () => {
  const stats = [
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
  ];

  return (
    <div className="hidden md:flex flex-col justify-between bg-gradient-to-b from-[#10998D] to-[#22C55E] text-white p-12 lg:p-16">
      <div>
        <div className="inline-block px-5 py-2 rounded-full border border-white/30 bg-white/10 text-sm mb-10">
          AI Powered Telemedicine Platform
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          One Secure Access For Every Healthcare User
        </h1>

        <p className="text-lg leading-8">
          Patients, doctors, pharmacies, laboratories, and insurance providers
          connected through one intelligent healthcare ecosystem.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[160px] bg-white/10 rounded-3xl p-5"
          >
            <h2 className="text-3xl font-bold">{item.title}</h2>

            <p className="mt-2">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginBanner;
