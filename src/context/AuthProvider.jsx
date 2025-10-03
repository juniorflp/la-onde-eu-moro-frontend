"use client";

import LoadingScreen from "@/components/ui/LoadingScreen";
import api, { setAuthToken } from "@/utils/api";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchCurrentUser = useCallback(async () => {
    try {
      // Check if we're on the server
      if (typeof window === "undefined") return null;

      const token = getCookie("authToken");

      if (!token) return null;

      const response = await api.get(`api/auth/v1/me`);

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      setLoading(false);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  console.log("loading", loading);

  useEffect(() => {
    // Ensure we're running on client side
    if (typeof window === "undefined") return;

    const token = getCookie("authToken");
    const userData = getCookie("userData");

    if (token) {
      setAuthToken(token);

      if (userData) {
        try {
          setUser(JSON.parse(String(userData)));
          setIsAuthenticated(true);
        } catch (e) {
          console.error("Erro ao parsear userData:", e);
        }
      }

      fetchCurrentUser().then((currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          // Opções do cookie: 30 dias de expiração, disponível em todas as páginas
          const cookieOptions = { maxAge: 30 * 24 * 60 * 60, path: "/" };
          setCookie("userData", JSON.stringify(currentUser), cookieOptions);
          setIsAuthenticated(true);
        } else {
          deleteCookie("authToken", { path: "/" });
          deleteCookie("userData", { path: "/" });
          setAuthToken(null);
          setUser(null);
          setIsAuthenticated(false);
        }
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoadingLogin(true);
    try {
      const response = await api.post(`api/auth/v1/login`, {
        email,
        password,
      });

      const data = response.data;

      if (!data.token) {
        throw new Error("Token não recebido do servidor");
      }

      // Opções do cookie: 30 dias de expiração, disponível em todas as páginas
      const cookieOptions = { maxAge: 30 * 24 * 60 * 60, path: "/" };
      setCookie("authToken", data.token, cookieOptions);
      setAuthToken(data.token);

      const userData = await fetchCurrentUser();

      if (userData) {
        setUser(userData);
        setCookie("userData", JSON.stringify(userData), cookieOptions);
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
    deleteCookie("authToken", { path: "/" });
    deleteCookie("userData", { path: "/" });
    setAuthToken(null);
    setUser(null);
    setIsAuthenticated(false);
    router.push("/");
  };

  const signup = async (userData) => {
    setLoadingSignup(true);
    try {
      const response = await api.post(`api/auth/v1/register`, userData);

      const data = response.data;

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
      // Opções do cookie: 30 dias de expiração, disponível em todas as páginas
      const cookieOptions = { maxAge: 30 * 24 * 60 * 60, path: "/" };
      setCookie("userData", JSON.stringify(userData), cookieOptions);
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

  return (
    <AuthContext.Provider value={contextValue}>
      {loading && getCookie("authToken") ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
