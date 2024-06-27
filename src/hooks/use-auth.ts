import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}
