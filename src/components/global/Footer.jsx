import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import InstaIcon from "../icons/InstaIcon";
import LinkdinIcon from "../icons/LinkdinIcon";
import LogoWhite from "../icons/LogoWhite";
import YoutubeIcon from "../icons/YoutubeIcon";
import ButtonSquare from "./ButtonSquare";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col relative h-auto md:h-[482px]  bg-primary text-white">
      {/* head footer */}
      <div className="flex items-center h-[120px]  border-b-2 w-full ">
        <div className="w-[50%] flex  h-full">
          <div className="min-w-[156px]"></div>

          <div className="border-white border-l-2 flex items-center pl-10">
            <Link href="/" className="transition-transform duration-300 hover:opacity-80">
              <LogoWhite />
            </Link>
          </div>
        </div>

        <div className="flex h-full w-[50%]  border-white border-l-2 ">
          <div className="flex items-center justify-between w-full">
            <div className="group grid place-items-center w-full h-full border-white border-r-2 cursor-pointer">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-transform duration-300 group-hover:scale-125"
              >
                <LinkdinIcon />
              </Link>
            </div>
            <div className="group grid place-items-center w-full h-full border-white border-r-2 cursor-pointer">
              <Link
                href="#"
                aria-label="Facebook"
                className="transition-transform duration-300 group-hover:scale-125"
              >
                <FacebookIcon />
              </Link>
            </div>
            <div className="group grid place-items-center w-full h-full border-white border-r-2 cursor-pointer">
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-transform duration-300 group-hover:scale-125"
              >
                <InstaIcon />
              </Link>
            </div>
            <div className="group grid place-items-center w-full h-full cursor-pointer">
              <Link
                href="#"
                aria-label="YouTube"
                className="transition-transform duration-300 group-hover:scale-125"
              >
                <YoutubeIcon />
              </Link>
            </div>
          </div>
          <div className="min-w-[156px] border-white border-l-2 "></div>
        </div>
      </div>

      {/* body footer */}
      <div className="flex items-center h-full  border-b-2 w-full ">
        <div className="w-[50%] flex  h-full">
          <div className="min-w-[156px]"></div>
          <div className="border-white border-l-2 flex p-10 flex-1">
            <div className="flex flex-wrap gap-6 w-full">
              {/* LÁ ONDE EU MORO */}
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-white/70 text-sm font-semibold tracking-[0.05em] uppercase leading-none">
                  Lá onde eu moro
                </span>
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Sobre nós
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Mapa de condomínios
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Regiões Atendidas
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Blog
                  </Link>
                </div>
              </div>

              {/* GESTÃO */}
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-white/70 text-sm font-semibold tracking-[0.05em] uppercase leading-none">
                  Gestão
                </span>
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Síndicos, Administradores e Conselheiros
                  </Link>
                </div>
              </div>

              {/* INFORMAÇÕES */}
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-white/70 text-sm font-semibold tracking-[0.05em] uppercase leading-none">
                  Informações
                </span>
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Guia de Uso
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Indique e Ganhe
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Denúncias
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Contato
                  </Link>
                  <Link
                    href="#"
                    className="text-white text-sm font-bold w-fit py-2 border-b border-transparent hover:border-white transition-all"
                  >
                    Central de ajuda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-[50%] border-white border-l-2 ">
          <div className="flex flex-col justify-center gap-6 py-10 px-20 w-full border-b-0">
            <h3 className="text-white text-2xl font-bold leading-tight max-w-[420px]">
              Fique por dentro
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 w-full">
                <div className="border border-white px-4 h-12 flex items-center rounded-t w-full">
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Insira seu email"
                    className="bg-transparent text-white placeholder-white/60 text-sm w-full outline-none"
                  />
                </div>
              </div>
              <ButtonSquare variant="white" className="w-full">
                Cadastrar
              </ButtonSquare>
            </div>
          </div>

          <div className="min-w-[156px] border-white  border-l-2 "></div>
        </div>
      </div>

      {/* footer footer */}
      <div className="flex items-center w-full h-[56px] px-[156px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-white/70 text-sm font-semibold tracking-[0.05em] uppercase leading-none">
            © 2025 Lá onde eu moro.
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white/70 text-sm font-semibold tracking-[0.05em] uppercase leading-none hover:text-white transition-colors"
            >
              Termos e condições de uso
            </Link>
            <div className="w-px h-4 bg-white" />
            <Link
              href="#"
              className="text-white/70 text-sm font-semibold tracking-[0.05em] uppercase leading-none hover:text-white transition-colors"
            >
              Políticas de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
