import { useContext } from "react";
import { AuthContextMod } from "./authProviderManage";
function UseAuthMod() {
  return useContext(AuthContextMod);
}
export { UseAuthMod };
