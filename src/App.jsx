import { Routes, Route, Navigate } from "react-router-dom";


import LoginPage from "./pages/Login/LoginPage";
// import ProtectedRoute from "./routes/ProtectedRoute";
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
      </Routes>
    </>
  );
}

export default App
