import { useContext } from "react";

// auth context.
import { AuthContext } from "@/contexts";

export const useAuth = () => {
  return useContext(AuthContext);
};
