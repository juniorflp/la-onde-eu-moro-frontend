"use client";

import { useAuth } from "@/context/AuthProvider";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HamburguerIcon from "../icons/HamburguerIcon";
import LogoWhite from "../icons/logoWhite";
import ButtonSquare from "./ButtonSquare";
import ContainerDefault from "./ContainerDefault";

const Header = () => {
  const { logout, user, initializing, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);
  const [menuSelected, setMenuSelected] = useState(null); //search, about, login, signup
  const [showMenu, setShowMenu] = useState(true);
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
        setShowMenu(true);
        initialScrollComplete.current = false;
        return;
      }

      if (!initialScrollComplete.current && currentScrollY > 100) {
        setShowMenu(false);
        initialScrollComplete.current = true;
      } else if (showMenu && scrollingUp) {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu]);

  return (
    <header className="fixed top-0 left-0 w-full py-4 z-[9999] ">
      <ContainerDefault className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">
            <LogoWhite />
          </Link>
        </div>

        <div className="flex items-center absolute top-0 right-0 w-full max-w-[614px] h-full ">
          {showMenu ? (
            <div className="flex items-center w-full max-w-[614px] border-b border-gray ">
              <ButtonSquare
                className="flex-1"
                selected={menuSelected === "search"}
                onClick={() => setMenuSelected("search")}
              >
                Buscar
              </ButtonSquare>
              <ButtonSquare
                className="flex-1"
                selected={menuSelected === "about"}
                onClick={() => setMenuSelected("about")}
              >
                Sobre nós
              </ButtonSquare>
              <ButtonSquare
                className="flex-1"
                selected={menuSelected === "login"}
                onClick={() => setMenuSelected("login")}
              >
                Fazer login
              </ButtonSquare>
              <ButtonSquare
                className="flex-1"
                selected={menuSelected === "signup"}
                onClick={() => setMenuSelected("signup")}
              >
                Cadastrar
              </ButtonSquare>
            </div>
          ) : (
            <button
              onClick={() => {
                setShowMenu(true);
              }}
              className="ml-auto mr-10 flex items-center justify-center size-12 border border-gray shadow-md bg-white rounded-2xl font-bold text-primary cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 select-none"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
            >
              <HamburguerIcon />
            </button>
          )}
        </div>

        {/* <div className="flex gap-4 items-center">
          {userData ? (
            <>
              <span className="text-white">Olá, {userData.firstName || userData.username}</span>
              <Button
                variant="white"
                onClick={() => {
                  logout();
                }}
              >
                Sair
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="white">Fazer Login</Button>
              </Link>
              <Link href="/cadastro">
                <Button variant="outline-white">Cadastre-se</Button>
              </Link>
            </>

          
          )}
        </div> */}
      </ContainerDefault>
    </header>
  );
};

export default Header;
