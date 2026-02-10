"use client";

import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import HamburguerIcon from "../icons/HamburguerIcon";
import Logo from "../icons/Logo";
import SearchIcon from "../icons/SearchIcon";
import Button from "./Button";
import ButtonSquare from "./ButtonSquare";
import ContainerDefault from "./ContainerDefault";

const Header = ({}) => {
  const { logout, user, isInitialized, isMounted } = useAuth();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuSelected, setMenuSelected] = useState(null);

  // Só exibe dados do usuário após montagem e inicialização completas
  const userData = isMounted && isInitialized ? user : null;

  return (
    <>
      <header
        className={twMerge(`fixed top-0 left-0 w-full  h-20 z-[9999] bg-white border-horizontal-b`)}
      >
        <ContainerDefault className="flex items-center justify-between px-10 h-full border-vertical">
          <div className={twMerge("flex items-center text-white")}>
            <Link
              href="/"
              className="text-xl font-semibold"
              aria-label="Voltar para página inicial"
            >
              <Logo />
            </Link>
          </div>

          {/* Menu hamburger para mobile */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              icon={<SearchIcon />}
              variant="orange"
              aria-label="Buscar condomínios"
              className={twMerge(
                "h-12 w-12 md:h-14 md:w-auto opacity-0 transform scale-0 transition-all duration-300",
              )}
            >
              <span className="text-white hidden md:block">Buscar</span>
            </Button>
            <button
              className={twMerge(
                "flex justify-center items-center w-[44px] h-[44px] p-2 rounded-[12px] border border-[#DCDCE9] bg-white shadow-[0_1px_2px_0_rgba(16,40,34,0.05)]",
              )}
              onClick={() => setMenuSelected("mobile-menu")}
              aria-label="Abrir menu"
            >
              <HamburguerIcon />
            </button>
          </div>

          {/* Menu para desktop */}
          <div className="hidden md:flex items-center ">
            <nav key="expanded-menu" className="flex items-center w-full gap-4">
              <ButtonSquare variant="ghost">Faça seu cadastro</ButtonSquare>
              <ButtonSquare variant="primary">Fazer Login</ButtonSquare>
            </nav>
          </div>
        </ContainerDefault>
      </header>

      {/* Menu mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-[10000] pt-6 transform transition-transform duration-300 ease-in-out ${
          menuSelected === "mobile-menu" ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 pb-4 mb-6 ">
          <Logo />
        </div>

        <button
          className="absolute top-6 right-6 w-[44px] h-[44px] flex justify-center items-center rounded-[12px] border border-[#DCDCE9] bg-white shadow-[0_1px_2px_0_rgba(16,40,34,0.05)] text-[#171717]"
          onClick={() => setMenuSelected(null)}
          aria-label="Fechar menu"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav className="flex flex-col px-6" suppressHydrationWarning>
          <Link
            href="#"
            className="py-5 border-b border-secondary text-lg font-medium text-gray-800"
          >
            Buscar
          </Link>
          <Link
            href="#"
            className="py-5 border-b border-secondary text-lg font-medium text-gray-800"
          >
            Sobre nós
          </Link>
          {!isMounted || !isInitialized || !userData ? (
            <>
              <Link
                href="/login"
                className="py-5 border-b border-secondary text-lg font-medium text-gray-800"
              >
                Fazer login
              </Link>
              <Link
                href="/cadastro"
                className="py-5 border-b border-secondary text-lg font-medium text-gray-800"
              >
                Cadastrar
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="py-5 border-b border-secondary text-lg font-medium text-gray-800 text-left"
            >
              Sair
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
