import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import InstaIcon from "../icons/InstaIcon";
import LinkdinIcon from "../icons/LinkdinIcon";
import Logo from "../icons/Logo";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="flex w-full md:flex-row flex-col relative h-auto md:h-[482px]  bg-primary text-white">
      <div className="flex items-center h-[120px] border-white border-b-2 w-full">
        <div className="w-[156px]"></div>

        <div className="border-white border-l-2 border-r-2 h-full w-full">
          <Link href="/" className="transition-transform duration-300 hover:opacity-80">
            <Logo />
          </Link>

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
        </div>
        <div className="w-[156px]"></div>
      </div>
    </footer>
  );
};

export default Footer;
