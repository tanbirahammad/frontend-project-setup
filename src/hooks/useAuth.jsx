import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const useAuth = () => {
   const authUtils=useContext(AuthContext);
   return authUtils;
};

export default useAuth;