import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <div className="container mx-auto py-12 px-4 bg-white relative ">
        {/* Conteúdo adicional da página pode ser adicionado aqui */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Condomínios em Destaque</h2>
          <p className="text-gray-600 mb-8">
            Explore os melhores condomínios do Brasil com informações detalhadas, fotos e avaliações
            de moradores.
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
    </main>
  );
}
