"use client";

import AuthProvider from "@/context/AuthProvider";
import Header from "@/components/global/Header";

/**
 * Este componente encapsula os componentes que precisam de funcionalidades do lado cliente
 * como o AuthProvider, mantendo o layout.jsx como um componente de servidor.
 */
export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <Header />
      <main className="pt-16">{children}</main>
    </AuthProvider>
  );
}