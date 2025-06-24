"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen((prev) => !prev);
  return (
    <div
      className={`h-20 border-b border-muted-foreground/20 fixed top-0 left-0 w-full backdrop-blur-md z-49 justify-between bg-white`}
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
          <Link href="/programs">Programs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/sign-up">
            <Button
              className="bg-green-500 text-white border-none font-semibold"
              variant={"outline"}
            >
              <Search />
            </Button>
          </Link>
        </div>

        <div className="md:hidden text-black">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent className="h-full">
              <div className="flex text-black flex-col text-2xl items-center my-32 gap-12">
                <SheetHeader>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <Link href="/" onClick={handleClose}>
                  Home
                </Link>
                <Link href="/about" onClick={handleClose}>
                  About
                </Link>
                <Link href="/programs" onClick={handleClose}>
                  Programs
                </Link>
                <Link href="/contact" onClick={handleClose}>
                  Contact
                </Link>
                <Link href="/sign-up" onClick={handleClose}>
                  <Button
                    className="bg-grren-500 text-white border-none font-semibold"
                    variant={"outline"}
                  >
                    <Search />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
