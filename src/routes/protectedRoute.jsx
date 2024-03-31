import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export function ProtectedRoute({ children }) {
  const { token } = useAuth();
  useEffect(() => {
    console.log(token);
  }, [token]);

  if (!token) {
    return <Navigate to={"/signin"} />;
  }
  return children;
}
