"use client";

import SearchBar from "../search/SearchBar";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900  z-50">
      {/* Elementos decorativos para dar efeitos visuais ao gradiente */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-400 opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>

      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-300"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 rounded-full bg-purple-400"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-indigo-300"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-6 relative z-10 py-20 md:py-28">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Encontre o Condomínio Ideal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Descubra informações, fotos e avaliações de condomínios em todo o Brasil
          </p>

          {/* Componente de busca com estilo adaptado */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-xl border border-white/20">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
