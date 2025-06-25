"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Page = () => {
  return (
    <motion.div
      className="py-24 min-h-screen w-full bg-white text-black"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex h-full items-center justify-between container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto text-black flex-col">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium my-12 max-w-3xl text-center leading-14"
          variants={fadeInUp}
        >
          Building a Better Tomorrow, Together
        </motion.h1>

        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 h-full my-6 items-center"
          variants={fadeInUp}
        >
          <Image
            src="/green.jpg"
            className="rounded-lg"
            alt=""
            height={1000}
            width={1000}
          />
          <motion.p className="md:text-lg tracking-wide leading-8">
            <span className="text-xl md:text-2xl text-green-500 font-bold">
              Update Lagos
            </span>{" "}
            aims to be the first and only platform that breaches the gap between
            the Lagos Government and its people, especially the Youth/Students.
            Our mission is to solve majority of the problems Lagos Students have
            faced for many years. All students deserve the best tools and
            programs for self-development and academic progression. With us, you
            have a voice about the things that matter most to you and the
            challenges and wishes of every Lagos student, with the aim and sole
            purpose of achieving and defeating all academic hurdles.
          </motion.p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 h-full my-6 items-center"
          variants={fadeInUp}
        >
          <motion.p className=" md:text-lg tracking-wide text-justify leading-8">
            Students with verified identities should be able to enjoy benefits
            ranging from as little as school books, to huge discounts and
            offers, down to part-time work{" "}
            <span className="text-green-500 md:text-2xl text-xl font-semibold">
              opportunities
            </span>{" "}
            with the government as well as from private companies and businesses
            that understand our vision, and align with our goals. With us, you
            have a channel where your voice will be projected, as every student
            has the individual right to comment and express their grievances and
            expectations from the Lagos Government.
          </motion.p>
          <Image src="/3026238.jpg" alt="" height={1000} width={1000} />
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 h-full my-6 items-center"
          variants={fadeInUp}
        >
          <Image src="/11201843.jpg" alt="" height={1000} width={1000} />
          <motion.div>
            <p className="text-lg tracking-wide mb-4">
              Here is a couple of our{" "}
              <span className="text-green-500 md:text-2xl text-xl font-semibold">
                dreams
              </span>{" "}
              and aspirations we aim to achieve with our project:
            </p>
            <motion.ul
              className="list-decimal px-8 space-y-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {[
                "Grants & Loans to Students...",
                "Income & Student Finance Support programs...",
                "Employment and Support Allowance for students with disabilities...",
                "Housing benefits: Many universities...",
                "Health Care: Students should be able to access free healthcare...",
                "Public transport Discounts: Students should benefit from discounted travels...",
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInUp}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
