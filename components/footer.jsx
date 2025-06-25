"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/update.lagos",
    icon: <FaInstagram size={28} className="text-pink-500" />,
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/update.lagos",
    icon: <FaSnapchatGhost size={28} className="text-yellow-400" />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@update.lagos",
    icon: <FaTiktok size={28} className="text-white" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  return (
    <div className="bg-[#001008]">
      <motion.div
        className="flex h-full items-start justify-between container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto text-white pt-24 pb-6 flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Logo + Branding */}
        <motion.div
          variants={fadeUp}
          className="flex items-start flex-col mb-6 w-full"
        >
          <Link href={"/"} className="flex gap-2 text-xl font-semibold">
            <Image
              src={"/logo-update.png"}
              width={500}
              height={500}
              alt="logo"
              className="w-20 h-20 bg-white rounded-full"
            />
          </Link>
          <p className="tracking-wider font-bold md:text-2xl text-lg">
            <span className="text-red-500">Up</span>
            <span className="text-yellow-600">date</span>
            <span className="text-blue-600">Lagos</span>
          </p>
          <p className="italic text-red-700 text-xs">
            News & Entertainment around you
          </p>
        </motion.div>

        {/* Info & Links */}
        <motion.div
          className="flex gap-6 w-full flex-col md:flex-row"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="text-start space-y-6 max-w-[200px]"
          >
            <p>
              <strong>Email:</strong> <br />
              <a
                href="mailto:info@updatelagos.com"
                className="text-green-600 underline"
              >
                info@updatelagos.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> <br />
              17 Abdul Quadri Adebiyi Street, Magodo GRA Phase 2, Lagos
            </p>
            <p>
              <strong>Phone:</strong> <br />
              <a href="tel:+2348099999471" className="text-green-600 underline">
                08099999471
              </a>{" "}
              or{" "}
              <a href="tel:+2348099999482" className="text-green-600 underline">
                08099999482
              </a>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex gap-8 lg:gap-12 items-center text-white justify-center w-full md:flex-col"
          >
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <Link className="hover:underline" href="/about">
              About
            </Link>
            <Link className="hover:underline" href="/programs">
              Programs
            </Link>
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="space-y-4">
              <h4 className="text-lg md:text-xl text-white">Socials</h4>
              <div className="flex md:gap-12 gap-6 sm:flex-col md:flex-row">
                {socials.map(({ name, url, icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex flex-col items-center space-y-2 hover:opacity-80 transition"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full bg-muted-foreground/20 h-[1px] mt-10"
          variants={fadeUp}
        />

        {/* Copyright */}
        <motion.div
          className="mt-4 flex justify-between w-full text-xs uppercase"
          variants={fadeUp}
        >
          <p>
            © {new Date().getFullYear()}, All Rights Reserved | Lagos State
            Government
          </p>
          <p>
            Powered by -{" "}
            <a href="https://github.com/kvng-dev" className="text-green-500">
              KINGTECH
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
