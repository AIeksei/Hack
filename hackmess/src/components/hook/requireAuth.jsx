import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "./useAuth";

const RequireAuth = () => {
  const location = useLocation();
  const value = UseAuth();
  return <Outlet />;
};

export { RequireAuth };
