import { NextResponse } from "next/server";

/**
 * Rota de registro para cadastro de novos usuários
 * Faz uma requisição para o backend na rota /api/auth/v1/register
 *
 * @param {Request} request - Requisição HTTP com os dados de cadastro
 * @returns {Promise<NextResponse>} Resposta com dados do usuário ou erro
 */
export async function POST(request) {
  try {
    // Obter os dados do corpo da requisição
    const userData = await request.json();
    const { password, confirmPassword, email, firstName, lastName, role } = userData;

    // Validar se os campos obrigatórios estão presentes
    if (!password || !confirmPassword || !email || !firstName || !lastName) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    // Obter a URL base do ambiente
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV || "http://localhost:8080";

    // Fazer a chamada para a API de registro
    const response = await fetch(`${baseUrl}/api/auth/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        confirmPassword,
        email,
        firstName,
        lastName,
        role: role || "ROLE_USER", // Se não for fornecido, usa ROLE_USER
      }),
    });

    // Obter os dados da resposta
    const data = await response.json();

    // Se a API retornar um erro, repassar para o cliente
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Falha no cadastro next" },
        { status: response.status }
      );
    }

    // Retornar os dados da resposta bem-sucedida
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao processar cadastro:", error);

    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
