import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("user");

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;