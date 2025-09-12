"use client";

import axios from "axios";

// Criação da instância base do Axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
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
