import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "./useAuth";

const RequireAuth = () => {
  const location = useLocation();
  const value = UseAuth();
  return value.enabled ? <Outlet /> : <Navigate to="/please" />;
};

export { RequireAuth };
