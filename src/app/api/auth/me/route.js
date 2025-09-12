import { NextResponse } from "next/server";

/**
 * Rota para obter os dados do usuário autenticado
 */
export async function GET(request) {
  try {
    // Obter o token de autenticação do cabeçalho da requisição
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Token de autenticação não fornecido ou inválido" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' do início

    // Obter a URL base do ambiente
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV || "http://localhost:8080";

    // Fazer a chamada para a API de autenticação
    const response = await fetch(`${baseUrl}/api/auth/v1/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Obter os dados da resposta
    const data = await response.json();

    // Se a API retornar um erro, repassar para o cliente
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Falha ao obter dados do usuário" },
        { status: response.status }
      );
    }

    // Retornar os dados do usuário
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao obter dados do usuário:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
