"use client";

import { useAuth } from "@/context/AuthProvider";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import HamburguerIcon from "../icons/HamburguerIcon";
import LogoDark from "../icons/LogoDark";
import LogoWhite from "../icons/LogoWhite";
import SearchIcon from "../icons/SearchIcon";
import Button from "./Button";
import ButtonSquare from "./ButtonSquare";
import ContainerDefault from "./ContainerDefault";

const Header = ({ forceDarkLogo = false, forceWhiteLogo = false }) => {
  const { logout, user, initializing, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);
  const [menuSelected, setMenuSelected] = useState(null); //search, about, login, signup
  const [hideBg, setHideBg] = useState(true);
  const [hideSearch, setHideSearch] = useState(true);
  const [useDarkLogo, setUseDarkLogo] = useState(false);
  const initialScrollComplete = useRef(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setUserData(null);
      return;
    }

    if (user) {
      setUserData(user);
    } else {
      const userDataFromCookie = getCookie("userData");
      if (userDataFromCookie) {
        try {
          setUserData(JSON.parse(String(userDataFromCookie)));
        } catch (e) {
          console.error("Error parsing user data:", e);
        }
      }
    }
  }, [user, isAuthenticated]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const isAtTop = currentScrollY < 50;

      lastScrollY = currentScrollY;

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
  }, [hideBg]);

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
            <Link href="/" className="text-xl font-semibold">
              {<LogoWhite />}
            </Link>
          </div>

          {/* Menu hamburger para mobile */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              onClick={() => {}}
              icon={<SearchIcon />}
              variant="orange"
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
            >
              <HamburguerIcon />
            </button>
          </div>

          {/* Menu para desktop */}
          <div className="hidden md:flex items-center absolute top-0 right-0 w-full max-w-[614px] h-full overflow-hidden">
            <div className="flex items-center w-full">
              <div
                key="expanded-menu"
                className="flex items-center w-full max-w-[614px] border-b border-gray bg-white"
              >
                <ButtonSquare className="flex-1" isFilled>
                  Buscar
                </ButtonSquare>
                <ButtonSquare className="flex-1" isFilled>
                  Sobre nós
                </ButtonSquare>
                <ButtonSquare className="flex-1" isFilled>
                  Fazer login
                </ButtonSquare>
                <ButtonSquare className="flex-1" isFilled>
                  Cadastrar
                </ButtonSquare>
              </div>
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

        <div className="flex flex-col px-6">
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
        </div>
      </div>
    </>
  );
};

export default Header;
