import { NextResponse } from "next/server";

/**
 * Rota de redirecionamento para manter compatibilidade com código existente
 * Redireciona para a nova rota /api/auth/register
 */
export async function POST(request) {
  // Redirecionar o corpo da requisição para a nova rota
  const body = await request.json();
  
  // Obter a URL base da requisição
  const url = new URL(request.url);
  const baseUrl = url.origin;
  
  // Chamar a nova rota de registro
  try {
    const response = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Retornar a resposta da nova rota
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Erro ao redirecionar para registro:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
