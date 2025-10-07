"use client";

import { useAuth } from "@/context/AuthProvider";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import LogoWhite from "../icons/LogoWhite";
import ButtonSquare from "./ButtonSquare";
import ContainerDefault from "./ContainerDefault";

const Header = ({ forceDarkLogo = false, forceWhiteLogo = false }) => {
  const { logout, user, initializing, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);
  const [menuSelected, setMenuSelected] = useState(null); //search, about, login, signup
  const [hideBg, setHideBg] = useState(true);
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideBg]);

  return (
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

        <div className="flex items-center absolute top-0 right-0 w-full max-w-[614px] h-full overflow-hidden">
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
  );
};

export default Header;
