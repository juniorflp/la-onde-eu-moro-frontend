"use client";

import LoadingScreen from "@/components/ui/LoadingScreen";
import { setAuthToken } from "@/utils/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) return null;

      const response = await fetch("/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao buscar dados do usuário");
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token) {
      setAuthToken(token);

      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }

      fetchCurrentUser().then((currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          localStorage.setItem("userData", JSON.stringify(currentUser));
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userData");
          setAuthToken(null);
          setUser(null);
          setIsAuthenticated(false);
        }
      });
    }
  }, []);

  const login = async (email, password) => {
    setLoadingLogin(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha na autenticação");
      }

      const data = await response.json();

      if (!data.token) {
        throw new Error("Token não recebido do servidor");
      }

      localStorage.setItem("authToken", data.token);
      setAuthToken(data.token);

      const userData = await fetchCurrentUser();

      if (userData) {
        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        setIsAuthenticated(true);
      }

      router.push("/");

      return { success: true };
    } catch (error) {
      setLoadingLogin(false);
      console.error("Erro de login:", error);
      return { success: false, error: error.message };
    } finally {
      setLoadingLogin(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setAuthToken(null);
    setUser(null);
    setIsAuthenticated(false);
    router.push("/");
  };

  const signup = async (userData) => {
    setLoadingSignup(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha no cadastro");
      }

      const data = await response.json();

      return login(userData.email, userData.password);
    } catch (error) {
      setLoadingSignup(false);
      console.error("Erro de cadastro:", error);
      return { success: false, error: error.message };
    } finally {
      setLoadingSignup(false);
    }
  };

  const refreshUserData = async () => {
    const userData = await fetchCurrentUser();

    if (userData) {
      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  console.log("User:", user);

  const contextValue = {
    user,
    login,
    logout,
    signup,
    isAuthenticated,
    loadingLogin,
    loadingSignup,
    refreshUserData,
  };

  const token = localStorage.getItem("authToken");

  if (!isAuthenticated && token) {
    return <LoadingScreen />;
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
