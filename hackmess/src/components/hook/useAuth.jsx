import { useContext } from "react";
import { AuthContext } from "./authProvider";
function UseAuth() {
  return useContext(AuthContext);
}
export { UseAuth };
