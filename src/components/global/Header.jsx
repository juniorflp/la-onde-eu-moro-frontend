"use client";

import { useAuth } from "@/context/AuthProvider";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoWhite from "../icons/logoWhite";
import Button from "./Button";
import ContainerDefault from "./ContainerDefault";

const Header = () => {
  const { logout, user, initializing, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);

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

  return (
    <header className="fixed top-0 left-0 w-full py-4   z-50">
      <ContainerDefault className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">
            <LogoWhite />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
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
        </div>
      </ContainerDefault>
    </header>
  );
};

export default Header;
