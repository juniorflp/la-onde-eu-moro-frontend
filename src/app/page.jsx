"use client";
import Hero from "@/components/home/Hero";
import { useAuth } from "@/context/AuthProvider";

export default function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <main className="min-h-screen ">
      <Hero />

      {isAuthenticated ? (
        <div className="container mx-auto py-12 px-4 bg-white relative ">
          {/* Conteúdo adicional da página pode ser adicionado aqui */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Condomínios em Destaque</h2>
            <p className="text-gray-600 mb-8">
              Explore os melhores condomínios do Brasil com informações detalhadas, fotos e
              avaliações de moradores.
            </p>

            {/* Aqui você pode adicionar cards de condomínios destacados ou outras informações */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Conteúdo em Breve</h3>
                <p className="text-gray-600">
                  Estamos trabalhando para trazer mais informações sobre condomínios.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="container mx-auto py-12 px-4 bg-white relative ">
          {/* Conteúdo adicional da página pode ser adicionado aqui */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Bem-vindo ao LA Onde Eu Moro</h2>
            <p className="text-gray-600 mb-8">
              Para acessar informações detalhadas sobre condomínios, fotos e avaliações de
              moradores, por favor, faça login ou cadastre-se.
            </p>

            <div className="flex gap-4">
              <a
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </a>
              <a
                href="/cadastro"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Cadastre-se
              </a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
