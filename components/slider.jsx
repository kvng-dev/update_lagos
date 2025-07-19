"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Grants & Student Loans",
    description:
      "Get access to financial aid for tuition, housing, and living costs. Verified students can apply for grants and loans designed to support your academic journey.",
    img: "/update/DSC00856.JPG",
    cta: "Apply for Support",
  },
  {
    id: 2,
    title: "Student Finance & Income Support",
    description:
      "Enjoy exclusive discounts and offers from our partners across Lagos — from food and travel to shopping and entertainment — just by showing your Student ID.",
    img: "/update/DSC00065.JPG",
    cta: "Explore Offers",
  },
  {
    id: 3,
    title: "Support for Students with Disabilities",
    description:
      "Every Lagos student has the right to education. We provide additional financial and academic support for students with disabilities, ensuring no one is left behind.",
    img: "/update/DSC00040.JPG",
    cta: "Learn More",
  },
  {
    id: 4,
    title: "Affordable Student Housing",
    description:
      "Access subsidized on-campus housing options across Lagos universities. Safe, affordable, and designed to help you focus on your studies.",
    img: "/update/DSC00751.JPG",
    cta: "Find Housing",
  },
  {
    id: 5,
    title: "Free & Subsidized Healthcare",
    description:
      "Students can apply for healthcare assistance — covering prescriptions, dental care, eye care, and more. Especially for those from low-income backgrounds.",
    img: "/update/DSC00810.JPG",
    cta: "Access Healthcare",
  },
  {
    id: 6,
    title: "Discounted Public Transport",
    description:
      "Show your Student ID and enjoy reduced fares on buses and other public transport systems within Lagos. Affordable and accessible travel for all students.",
    img: "/update/DSC00819.JPG",
    cta: "Get Travel Pass",
  },
];

const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="w-full h-[80vh] md:h-screen"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="h-[900px]">
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              <div className="absolute w-full h-full bg-black/30 z-10" />

              <Image
                src={slide.img}
                alt=""
                width={5000}
                height={5000}
                sizes="100vw"
                className="object-cover object-left-top md:object-[60%_18%] w-full h-full"
              />
              <div className="absolute inset-0 z-30 text-white flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent max-w-4xl"
                >
                  {slide.title}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className={`text-lg md:text-2xl max-w-3xl`}
                >
                  {slide.description}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {/* <Link href={"/"}>
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="bg-green-500 text-white border-none mt-8 font-semibold"
                  >
                    {slide.cta}
                  </Button>
                </Link> */}
                </motion.div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
