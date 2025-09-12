"use client";

/**
 * Componente de tela de carregamento que cobre toda a tela com uma animação de loading
 * @param {Object} props - Propriedades do componente
 * @param {string} props.message - Mensagem a ser exibida (opcional)
 * @param {boolean} props.overlay - Se deve cobrir toda a tela com overlay
 * @param {string} props.className - Classes adicionais para o container
 * @returns {JSX.Element} O componente de loading
 */
export default function LoadingScreen({
  message = "Carregando suas informações...",
  overlay = true,
  className = "",
}) {
  const containerClasses = overlay
    ? "fixed inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center"
    : `flex flex-col items-center justify-center ${className}`;

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Círculo animado externo */}
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        {/* Círculo animado interno com direção oposta */}
        <div className="absolute top-1 left-1 w-14 h-14 border-4 border-blue-400 border-b-transparent rounded-full animate-spin-slow"></div>
        {/* Logo ou identificador no centro */}
        <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
          <span className="text-xl font-bold text-blue-600">LA</span>
        </div>
      </div>
      {message && <p className="mt-4 text-blue-700 font-medium">{message}</p>}
    </div>
  );
}
