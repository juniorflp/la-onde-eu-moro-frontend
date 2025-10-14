import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import InstaIcon from "../icons/InstaIcon";
import LinkdinIcon from "../icons/LinkdinIcon";
import LogoWhite from "../icons/LogoWhite";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer = () => {
  return (
    <div className="flex w-full md:flex-row flex-col relative h-auto md:h-[600px] ">
      <div className="flex-1 max-w-full md:max-w-[32%] bg-secondary p-6 md:p-[108px]">
        <div className="flex flex-col justify-between gap-10 text-white h-full w-full max-w-[246px] ">
          <Link href="/" className="transition-transform duration-300 hover:opacity-80">
            <LogoWhite />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare. Lectus
            vestibulum.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="LinkedIn" className="transition-transform hover:scale-125">
              <LinkdinIcon className="transition-all duration-300 hover:opacity-80" />
            </Link>
            <Link href="#" aria-label="Facebook" className="transition-transform hover:scale-125">
              <FacebookIcon className="transition-all duration-300 hover:opacity-80" />
            </Link>
            <Link href="#" aria-label="Instagram" className="transition-transform hover:scale-125">
              <InstaIcon className="transition-all duration-300 hover:opacity-80" />
            </Link>
            <Link href="#" aria-label="YouTube" className="transition-transform hover:scale-125">
              <YoutubeIcon className="transition-all duration-300 hover:opacity-80" />
            </Link>
          </div>
          <p className="text-[14px] text-white">© 2025 LÁ ONDE EU MORO.</p>
        </div>
      </div>

      <div className="flex-1  bg-primary p-6 justify-between flex-col flex w-full md:p-[108px]">
        <div className="w-full h-2" />

        <div className="flex md:flex-row flex-col gap-6 justify-between w-full ">
          <div className="flex flex-col  text-white h-full w-full max-w-[246px] ">
            <h4 className="font-bold text-[14px] tracking-[4px] mb-4">LÁ ONDE EU MORO</h4>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                <Link href="#">Sobre nós</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Mapa de condomínios</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Regiões Atendidas</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  text-white h-full w-full max-w-[246px] ">
            <h4 className="font-bold text-[14px] tracking-[4px] mb-4">GESTÃO</h4>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                <Link href="#">Síndicos, Administradores e Conselheiros</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  text-white h-full w-full max-w-[246px] ">
            <h4 className="font-bold text-[14px] tracking-[4px] mb-4">INFORMAÇÕES</h4>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                <Link href="#">Guia de Uso</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Indique e Ganhe</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Denúncias</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Perguntas Frequêntes</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Contato</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link href="#">Central de ajuda</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-10 mb-4 md:mb-0 md:mt-0 md:justify-end  gap-3 text-[14px] text-white">
          <Link href="/terms">TERMOS E CONDIÇÕES DE USO</Link> |{" "}
          <Link href="/privacy">POLÍTICA DE PRIVACIDADE</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
