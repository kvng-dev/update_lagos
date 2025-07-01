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
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen((prev) => !prev);

  const menuVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const navVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Controls how fast each link comes in
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  const navbarVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="h-24 border-b border-muted-foreground/20 fixed top-0 left-0 w-full backdrop-blur-md z-49 justify-between bg-white"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="flex h-full items-center justify-between container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto text-black">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href={"/"} className="flex gap-2 text-xl font-semibold">
            <Image
              src={"/u-logo.png"}
              width={700}
              height={700}
              alt="logo"
              className="md:w-24 md:h-20 w-18 h-16"
            />
          </Link>
        </motion.div>

        <motion.div
          className="hidden md:flex gap-12 items-center text-[18px] font-light"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/programs", label: "Programs" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <motion.div key={href} variants={linkVariants}>
              <Link className="hover:text-green-600" href={href}>
                {label}
              </Link>
            </motion.div>
          ))}

          <motion.div variants={linkVariants}>
            <Link href="/sign-up">
              <Button
                className="bg-green-500 text-white border-none font-semibold"
                variant="outline"
              >
                <Search />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="md:hidden text-black">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent className="h-full bg-white">
              <SheetHeader className="absolute top-0 left-2">
                <Image
                  src={"/u-logo.png"}
                  width={700}
                  height={700}
                  alt="logo"
                  className="w-20 h-16"
                />
                <SheetTitle className="text-sm">
                  <span className="text-red-500">Up</span>
                  <span className="text-yellow-600">date</span>
                  <span className="text-blue-600">Lagos</span>
                </SheetTitle>
              </SheetHeader>
              <div className="absolute h-1/2 w-full top-1/4">
                {/* <div className="w-12 h-12 rounded-full bg-red-600 opacity-30 left-4 bottom-12 absolute animate-" />
                <div className="w-12 h-12 rounded-full bg-blue-600 opacity-30 right-4 top-12 absolute animate-pulse" /> */}
                <div className="w-24 h-24 rounded-full bg-yellow-600 opacity-30 right-1/2 bottom-1/2 absolute animate-bounce -z-10" />
              </div>
              <motion.div
                className="flex text-black flex-col text-2xl font-light items-center justify-center gap-12 h-full z-30"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/programs", label: "Programs" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <motion.div key={href} variants={itemVariants}>
                    <Link
                      className="px-4 text-gray-600 font-medium hover:scale-110"
                      href={href}
                      onClick={handleClose}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <Link href="/sign-up" onClick={handleClose}>
                    <Button
                      className="bg-green-500 text-white border-none font-semibold"
                      variant="outline"
                    >
                      <Search />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  );
};
export default Navbar;
