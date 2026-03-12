"use client";

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
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          setIsInitialized(true);
        } else {
          deleteCookie("authToken", { path: "/" });
          deleteCookie("userData", { path: "/" });
          setAuthToken(null);
          setUser(null);
          setIsAuthenticated(false);
          setIsInitialized(true);
        }
      });
    } else {
      setLoading(false);
      setIsInitialized(true);
    }
  }, [fetchCurrentUser]);

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
        setIsInitialized(true);
      }

      router.push("/");

      return { success: true };
    } catch (error) {
      console.error("Erro de login:", error);
      return {
        success: false,
        error: error.response?.data?.message || error.message || "Erro ao fazer login",
      };
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
      await api.post(`api/auth/v1/register`, userData);
      return login(userData.email, userData.password);
    } catch (error) {
      console.error("Erro de cadastro:", error);
      return {
        success: false,
        error: error.response?.data?.message || error.message || "Erro ao criar conta",
      };
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

  const contextValue = {
    user,
    login,
    logout,
    signup,
    isAuthenticated,
    loadingLogin,
    loadingSignup,
    refreshUserData,
    isInitialized,
    isMounted,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {/* Exibe loading apenas no servidor e primeira renderização do cliente */}
      {/* {!isMounted && loading ? <LoadingScreen /> : children} */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
