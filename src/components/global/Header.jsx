"use client";

import { useAuth } from "@/context/AuthProvider";
import { getCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HamburguerIcon from "../icons/HamburguerIcon";
import LogoWhite from "../icons/LogoWhite";
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
        initialScrollComplete.current = true;

        setShowMenu(false);
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

        <div className="flex items-center absolute top-0 right-0 w-full max-w-[614px] h-full overflow-hidden">
          {/* Container que permanece independente do estado do menu */}
          <motion.div
            className="flex items-center w-full"
            layout
            transition={{
              layout: {
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
              },
            }}
          >
            <AnimatePresence mode="wait">
              {showMenu ? (
                /* Menu expandido */
                <motion.div
                  key="expanded-menu"
                  className="flex items-center w-full max-w-[614px] border-b border-gray"
                  initial={{ x: 300, scale: 0.8, opacity: 0 }}
                  animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      bounce: 0.4,
                    },
                  }}
                  exit={{
                    x: "95%",
                    scale: 0.2,
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 0.4,
                    },
                  }}
                >
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
                </motion.div>
              ) : (
                /* Botão hamburger */
                <motion.button
                  key="hamburger-button"
                  onClick={() => setShowMenu(true)}
                  className="ml-auto mr-10 flex items-center justify-center size-12 min-w-12 border border-gray shadow-md bg-white rounded-2xl font-bold text-primary cursor-pointer select-none"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                  initial={{ scale: 0.5, opacity: 0, x: -50 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                      delay: 0.1,
                    },
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HamburguerIcon />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
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
