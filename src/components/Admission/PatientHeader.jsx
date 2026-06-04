// src/components/PatientAdmission/PatientHeader.jsx

import { Typography } from "@mui/material";

const PatientHeader = () => {
  return (
    <div className="mb-8">
      <Typography variant="h4" fontWeight="bold">
        Patient Admission Form
      </Typography>

      <Typography color="text.secondary">
        Enter patient details below
      </Typography>
    </div>
  );
};

export default PatientHeader;
