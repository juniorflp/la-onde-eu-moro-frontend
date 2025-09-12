import { NextResponse } from "next/server";

/**
 * Rota de autenticação para login de usuários
 * Faz uma requisição para o backend na rota /api/auth/v1/login
 */
export async function POST(request) {
  try {
    // Obter os dados do corpo da requisição
    const body = await request.json();
    const { email, password } = body;

    // Validar se os campos obrigatórios estão presentes
    if (!email || !password) {
      return NextResponse.json({ error: "Email e senha são obrigatórios" }, { status: 400 });
    }

    // Obter a URL base do ambiente
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV || "http://localhost:8080";

    // Fazer a chamada para a API de autenticação
    const response = await fetch(`${baseUrl}/api/auth/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Obter os dados da resposta
    const data = await response.json();

    // Se a API retornar um erro, repassar para o cliente
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Falha na autenticação" },
        { status: response.status }
      );
    }

    // A resposta deve conter o token conforme especificado: token:"dsfsdfds"
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao processar login:", error);

    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
