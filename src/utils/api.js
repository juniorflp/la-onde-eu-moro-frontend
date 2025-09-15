"use client";

import axios from "axios";
import { toast } from "react-toastify";

// Criação da instância base do Axios
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL_PROD
      : process.env.NEXT_PUBLIC_API_URL_DEV || "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor de requisições - adiciona o token de autenticação automaticamente
api.interceptors.request.use(
  (config) => {
    // Adiciona o token de autenticação do localStorage (se existir)
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    toast.error(error.response.data.message || "Ocorreu um erro na comunicação com o servidor.");

    return Promise.reject(error);
  }
);

// Interceptor de respostas - útil para tratamento global de erros
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tratamento de erros global
    if (error.response) {
      // O servidor respondeu com um status de erro
      console.error("Erro na resposta:", error.response.status, error.response.data);
      toast.error(error.response.data.message || "Ocorreu um erro na comunicação com o servidor.");

      // Tratamento específico para erros comuns
      if (error.response.status === 401) {
        // Token inválido ou expirado
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        // Redirecionar para a página de login se não estiver na página de login
        if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }
      }
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      console.error("Erro na requisição:", error.request);
    } else {
      // Algo aconteceu na configuração da requisição que gerou um erro
      console.error("Erro:", error.message);
    }

    return Promise.reject(error);
  }
);

// Funções utilitárias para autenticação

/**
 * Define o token de autenticação para ser usado em todas as requisições subsequentes
 * @param {string} token - O token JWT recebido após autenticação
 */
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("authToken");
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
