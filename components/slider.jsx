"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Update Lagos",
    description:
      "Bridging the gap between the Lagos State Government and its youth—empowering the next generation of leaders.",
    img: "/6006864.jpg",
    cta: "Get Started",
    bg: "text-brown-500",
  },
  {
    id: 2,
    title: "Empowering Students Across Lagos",
    description:
      "Unlock access to education, mentorship, and tools designed to support academic and personal growth.",
    img: "/pictures/shaquiel.jpg",
    cta: "Explore Programs",
    bg: "text-pink-800",
  },
  {
    id: 3,
    title: "Your Voice, Your Lagos",
    description:
      "Speak directly to the government. Share feedback, raise concerns, and be part of change-making conversations.",
    img: "/5324834.jpg",
    cta: "Get Started",
    bg: "text-blue-800",
  },
  {
    id: 4,
    title: "Innovation Starts With You",
    description:
      "Join bootcamps, workshops, and innovation hubs that bring your ideas to life and solve real-world problems.",
    img: "/pictures/annie.jpg",
    cta: "Get Started",
    bg: "text-pink-200",
    cta: "Explore",
  },
  {
    id: 5,
    title: "Career Pathways for Lagos Youth",
    description:
      "Access internships, mentorships, and job placement programs tailored for Lagos students and recent grads.",
    img: "/pictures/godfrey.jpg",
    cta: "Explore",
  },
  {
    id: 6,
    title: "A Community That Listens",
    description:
      "Participate in town halls and forums. Share your challenges and help shape a better future for all students.",
    img: "/pictures/marcus.jpg",
    cta: "Explore",
  },
];

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="">
      <Carousel
        swipeable={true}
        draggable={false}
        arrows={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="h-[900px]">
            <div className="absolute w-full h-full bg-black/30 z-10" />

            <Image
              src={slide.img}
              alt=""
              width={5000}
              height={5000}
              sizes="100vw"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 z-30 text-white flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl font-semibold mb-2 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
              >
                {slide.title}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-2xl max-w-4xl`}
              >
                {slide.description}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link href={"/"}>
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="bg-blue-500 text-white border-none mt-8 font-bold"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
