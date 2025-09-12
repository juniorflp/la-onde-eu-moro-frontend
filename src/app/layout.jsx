import localFont from "next/font/local";
import ClientLayout from "../components/global/ClientLayout";
import "./globals.css";

const geistSans = localFont({
  src: [{ path: "../../public/fonts/GeistVF.woff", weight: "100 900" }],
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: [{ path: "../../public/fonts/GeistMonoVF.woff", weight: "100 900" }],
  variable: "--font-geist-mono",
});

// Metadados para SEO e OpenGraph
export const metadata = {
  title: "LA Onde Eu Moro - Avaliações e informações sobre condomínios",
  description: "Encontre as melhores informações sobre condomínios no Brasil, com avaliações reais de moradores, fotos e detalhes sobre infraestrutura.",
  keywords: ["condomínios", "avaliações", "moradia", "apartamentos", "imóveis"],
  openGraph: {
    title: "LA Onde Eu Moro",
    description: "Avaliações e informações sobre condomínios no Brasil",
    url: "https://laondeeumoro.com",
    siteName: "LA Onde Eu Moro",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
