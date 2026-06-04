// src/pages/PatientAdmission/PatientAdmissionPage.jsx


import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import PatientHeader from "../../components/Admission/PatientHeader";
import PatientForm from "../../components/Admission/PatientForm";

const PatientAdmissionPage = () => {
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[280px] p-6">
        <Header />

        <div className="mt-6 bg-white rounded-3xl shadow-sm p-8">
          <PatientHeader />
          <PatientForm />
        </div>
      </div>
    </div>
  );
};

export default PatientAdmissionPage;
