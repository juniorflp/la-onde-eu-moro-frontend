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

// Interceptor de requisições - útil para adicionar token de autenticação
api.interceptors.request.use(
  (config) => {
    // Aqui você pode adicionar o token de autenticação quando implementar login
    const token = localStorage.getItem("token");
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
        localStorage.removeItem("token");
        // Aqui você pode redirecionar para a página de login se necessário
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

export default api;
