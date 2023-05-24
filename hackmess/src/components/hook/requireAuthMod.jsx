import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UseAuthMod } from "./useAuthMod";

const RequireAuthMod = () => {
  const value = UseAuthMod();
  return value.enabledManage ? <Outlet /> : <Navigate to="/please" />;
};

export { RequireAuthMod };
