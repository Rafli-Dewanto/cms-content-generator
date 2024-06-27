import { toast } from "@/hooks/use-toast";
import { getErrorMessage } from "@/utils/get-error-msg";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cookies, , removeCookie] = useCookies(["token", "userEmail"]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { token } = cookies;
        if (!token) {
          setIsAuthenticated(false);
          router.replace("/auth/login");
          return;
        }
        setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

  const logout = () => {
    try {
      removeCookie("token");
      removeCookie("userEmail");
      setUser(null);
      setIsAuthenticated(false);
      router.replace("/auth/login");
    } catch (error) {
      toast({
        title: getErrorMessage(error) || "Logout failed",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
