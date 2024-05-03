"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

import { AuthContext } from "../contexts";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (auth) {
      if (pathname === "/login" || pathname === "/register") router.push("/");
    }
  }, [pathname]);

  useEffect(() => {
    const authData = localStorage.getItem("auth");

    if (authData) {
      try {
        setAuth(JSON.parse(authData));
      } catch (error) {
        console.error("Error parsing auth data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (auth) {
      try {
        localStorage.setItem("auth", JSON.stringify(auth));
      } catch (error) {
        console.error("Error storing auth data:", error);
      }
    }
  }, [auth]);

  const logout = useCallback(() => {
    localStorage.removeItem("auth");
    setAuth(null);
  }, []);

  const value = {
    auth,
    setAuth,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
