"use client";

import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";

const Header = () => {
  const { logout } = useAuth();
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm z-50">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-semibold">
          LA Onde Eu Moro
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {userData ? (
          <>
            <span className="text-gray-700">Olá, {userData.firstName || userData.username}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Login
              </button>
            </Link>
            <Link href="/cadastro">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Cadastre-se
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
