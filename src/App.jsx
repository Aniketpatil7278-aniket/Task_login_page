import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Signup/SignUpPage";
import AdmissionPage from "./pages/Admission/AdmissionPage";
import Dashboard from "./pages/Dashboard/DashboardPage";


// import FormikDemo from "./pages/Demo/FormikDemo";
import { useSelector } from "react-redux";

function App() {
     const { isAuthenticated } = useSelector((state) => state.auth);

  
  return (
    <>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
        />

        {/*Sigup page */}
        <Route path="/signup" element={<SignUpPage />} />

        {/*Dashboard page  */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {" "}
              <Dashboard />{" "}
            </ProtectedRoute>
          }
        />

        {/*Admission page  */}
        <Route path="/admission"
      element={
        <ProtectedRoute>
          <AdmissionPage />
        </ProtectedRoute>
      }/>

      
      </Routes>
    </>
  );
}

export default App
