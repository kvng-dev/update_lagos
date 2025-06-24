import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className={`h-20 border-b border-muted-foreground/20 fixed top-0 left-0 w-full backdrop-blur-md z-99 justify-between bg-white`}
    >
      <div className="flex h-full items-center justify-between container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto text-black">
        <Link href={"/"} className="flex gap-2 text-xl font-semibold">
          {/* <p className="tracking-wider">
            Update<span className="text-[#108a00] ">Lagos</span>
          </p> */}
          <Image
            src={"/logo-update.png"}
            width={700}
            height={700}
            alt="logo"
            className="w-20 h-20"
          />
        </Link>

        <div className="hidden md:flex gap-12 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Programs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/sign-up">
            <Button
              className="bg-blue-500 text-white border-none font-semibold"
              variant={"outline"}
            >
              <Search />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
