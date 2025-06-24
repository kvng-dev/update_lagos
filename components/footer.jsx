import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaSnapchat,
  FaSnapchatGhost,
  FaSnapchatSquare,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#001008]">
      <div className="flex h-full items-start justify-between container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto text-white pt-24 pb-6 flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center flex-col">
            <Link href={"/"} className="flex gap-2 text-xl font-semibold">
              <Image
                src={"/logo-update.png"}
                width={500}
                height={500}
                alt="logo"
                className="w-20 h-20"
              />
            </Link>
            <p className="tracking-wider font-bold text-2xl">
              <span className="text-red-500">Up</span>
              <span className="text-yellow-600">date</span>
              <span className="text-blue-600">Lagos</span>
            </p>
            <p className="italic text-red-700 text-xs">
              News & Entertainment aroud you
            </p>
          </div>

          <div className="text-3xl flex gap-8">
            <FaInstagram />
            <FaSnapchatSquare />
            <FaTiktok />
          </div>
        </div>

        <div className="flex gap-8 md:gap-24 items-center text-white justify-center my-8 w-full">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="w-full bg-muted-foreground/20 h-[1px] mt-10" />
        <div className="mt-4 flex justify-between w-full">
          <p className="uppercase text-xs">
            © Copyright {new Date().getFullYear()}, All Rights Reserved | Lagos
            State Government
          </p>

          <p className="text-xs uppercase">
            Powered by -{" "}
            <a href="https://github.com/kvng-dev" className="text-green-500">
              KINGTECH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
