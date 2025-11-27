"use client";

import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import HamburguerIcon from "../icons/HamburguerIcon";
import LogoDark from "../icons/LogoDark";
import LogoWhite from "../icons/LogoWhite";
import SearchIcon from "../icons/SearchIcon";
import Button from "./Button";
import ButtonSquare from "./ButtonSquare";
import ContainerDefault from "./ContainerDefault";

const Header = ({ forceDarkLogo = false }) => {
  const { logout, user, isInitialized, isMounted } = useAuth();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuSelected, setMenuSelected] = useState(null); //search, about, login, signup
  const [hideBg, setHideBg] = useState(true);
  const [hideSearch, setHideSearch] = useState(true);
  const [useDarkLogo, setUseDarkLogo] = useState(false);
  const initialScrollComplete = useRef(false);

  // Só exibe dados do usuário após montagem e inicialização completas
  const userData = isMounted && isInitialized ? user : null;

  useEffect(() => {
    if (!isHomePage) {
      setHideBg(false);
      setUseDarkLogo(true);
      initialScrollComplete.current = true;
    } else {
      setHideBg(true);
      setUseDarkLogo(false);
      initialScrollComplete.current = false;
    }
  }, [pathname, isHomePage]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const isAtTop = currentScrollY < 50;

      lastScrollY = currentScrollY;

      // Só aplica o comportamento de transparência se estiver na home
      if (isHomePage) {
        if (isAtTop) {
          setHideBg(true);
          setUseDarkLogo(false);
          initialScrollComplete.current = false;
          return;
        }

        if (!initialScrollComplete.current && currentScrollY > 100) {
          initialScrollComplete.current = true;
          setHideBg(false);
          setUseDarkLogo(true);
        } else if (hideBg && scrollingUp) {
          setHideBg(false);
          setUseDarkLogo(true);
        }
      } else {
        // Em outras páginas, sempre mostra o background
        setHideBg(false);
        setUseDarkLogo(true);
      }

      if (currentScrollY > 600) {
        setHideSearch(false);
      } else {
        setHideSearch(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideBg, isHomePage]);

  return (
    <>
      <header
        className={twMerge(
          `fixed top-0 left-0 w-full py-4 z-[9999]  ${
            useDarkLogo ? "light-background" : "dark-background"
          } transition-all duration-300`,
          hideBg ? "bg-white hero:bg-transparent " : "bg-white shadow-md"
        )}
      >
        <ContainerDefault className="flex items-center justify-between">
          <div
            className={twMerge(
              "flex items-center text-white",
              forceDarkLogo && "text-[#171717]",
              hideBg ? "text-[#171717] hero:text-white" : "text-[#171717]"
            )}
          >
            <Link
              href="/"
              className="text-xl font-semibold"
              aria-label="Voltar para página inicial"
            >
              <LogoWhite />
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
                !hideSearch && "opacity-100 scale-100"
              )}
            >
              <span className="text-white hidden md:block">Buscar</span>
            </Button>
            <button
              className={twMerge(
                "flex justify-center items-center w-[44px] h-[44px] p-2 rounded-[12px] border border-[#DCDCE9] bg-white shadow-[0_1px_2px_0_rgba(16,40,34,0.05)]",
                forceDarkLogo && "text-[#171717]",
                hideBg ? "text-[#171717] hero:text-white" : "text-[#171717]"
              )}
              onClick={() => setMenuSelected("mobile-menu")}
              aria-label="Abrir menu"
            >
              <HamburguerIcon />
            </button>
          </div>

          {/* Menu para desktop */}
          <div className="hidden md:flex items-center absolute top-0 right-0 w-full max-w-[614px] h-full overflow-hidden">
            <div className="flex items-center w-full">
              <nav
                key="expanded-menu"
                className="flex items-center w-full max-w-[614px] border-b border-gray bg-white"
              >
                <ButtonSquare className="flex-1" isFilled>
                  Buscar
                </ButtonSquare>
                <ButtonSquare className="flex-1" isFilled>
                  Sobre nós
                </ButtonSquare>
                <Link href="/cadastro" className="flex-1">
                  <ButtonSquare isFilled>Cadastrar</ButtonSquare>
                </Link>
                <div className="flex-1" suppressHydrationWarning>
                  {!userData ? (
                    <Link href="/login" className="w-full h-full">
                      <ButtonSquare isFilled className="whitespace-nowrap">
                        Fazer login
                      </ButtonSquare>
                    </Link>
                  ) : (
                    <ButtonSquare isFilled className="whitespace-nowrap" onClick={logout}>
                      Sair
                    </ButtonSquare>
                  )}
                </div>
              </nav>
            </div>
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
          <LogoDark />
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
