"use client";

import Header from "@/components/global/Header";
import AuthProvider from "@/context/AuthProvider";
import { ToastContainer } from "react-toastify";

/**
 * Este componente encapsula os componentes que precisam de funcionalidades do lado cliente
 * como o AuthProvider, mantendo o layout.jsx como um componente de servidor.
 */
export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <ToastContainer />
      <Header />
      <main className="pt-16">{children}</main>
    </AuthProvider>
  );
}
