import {
  BrainCircuit,
  BriefcaseBusiness,
  BusFront,
  CalendarCheck,
  Heart,
  House,
  Laptop,
  MessageCircleMore,
  Presentation,
  Speaker,
  Users2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaCoins, FaLaptop, FaUsers } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Benefits = () => {
  const router = useRouter();
  const benefits = [
    {
      type: "Grants",
      details: "Financial aid to help cover educational expenses",
      icon: <FaCoins size={35} />,
    },
    {
      type: "Discounts",
      details: "Exclusive discounts on essential services and products",
      icon: <BiSolidDiscount size={35} />,
    },
    {
      type: "Employment Support",
      details: "Resources and support to find internships and jobs",
      icon: <BriefcaseBusiness size={35} />,
    },
    {
      type: "Housing Assistance",
      details: "Assistance with finding affordable and safe housing",
      icon: <House size={35} />,
    },
    {
      type: "Healthcare Access",
      details: "Access to quality healthcare services and information",
      icon: <Heart className="fill-green-500" size={35} />,
    },
    {
      type: "Transport Discounts",
      details: "Reduced fares on public transportation within Lagos",
      icon: <BusFront size={35} />,
    },
    {
      type: "Digital Learning Tools",
      details: "Free or discounted access to online courses and platforms",
      icon: <FaLaptop size={35} />,
    },
    {
      type: "Mentorship Programs",
      details: "Connect with professionals and mentors in your field",
      icon: <FaUsers size={35} />,
    },
    {
      type: "Mental Health Support",
      details: "Access to counseling and wellness resources",
      icon: <BrainCircuit size={35} />,
    },
    {
      type: "Event Access",
      details: "Free or discounted access to educational and career events",
      icon: <CalendarCheck size={35} />,
    },
  ];

  const forums = [
    {
      image: "/authen.jpg",
      title: "Submit Ideas",
      words:
        "Share your innovative ideas and solutions to address challenges faced by students in Lagos.",
    },
    {
      image: "/2616092.jpg",
      title: "Participate in Surveys",
      words:
        "Provide feedback on government policies and initiatives through surveys and polls.",
    },
    {
      image: "/9894285.jpg",
      title: "Join Forums",
      words:
        "Enagage in discussions with fellow students and government officials on importatnt topics.",
    },
    {
      image: "/2989093.jpg",
      title: "Collaborate on Projects",
      words:
        "Team up with other students and stakeholders to co-create impactful community-driven solutions.",
    },
  ];

  return (
    <>
      <div className=" py-24 bg-white text-black">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 mx-auto space-y-2"
        >
          <motion.h3
            variants={fadeUp}
            className="font-bold text-2xl md:text-3xl tracking-wider"
          >
            Benefits for <span className="text-green-600">Students</span>
          </motion.h3>
          <motion.p
            className="text-lg text-muted-foreground font-medium mb-12"
            variants={fadeUp}
          >
            Update Lagos offers a range of benefits designed to support students
            in their academic and personal lives
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariant}
            initial="hidden"
            animate="show"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.type}
                variants={itemVariant}
                className="px-4 py-12 border-gray-200 border rounded-sm flex items-center justify-center flex-col gap-4 cursor-pointer hover:border-green-400 transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:text-white group"
              >
                <div className="text-green-500 group-hover:text-white text-xl group-hover:animate-bounce">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-lg text-center">
                  {benefit.type}
                </h4>
                <p className="text-gray-400 text-center group-hover:text-white capitalize">
                  {benefit.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className=" py-24 bg-[#f0f7f6] text-black">
        <div className="container px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 mx-auto space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-bold text-2xl md:text-3xl"
          >
            <span className="text-blue-500">How</span> It Works
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground font-medium mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Update Lagos provides a direct channel for students to engage with
            the government and influence policy decisions
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Animated Image Card */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0 w-full rounded-lg overflow-hidden shadow-lg md:hidden lg:inline lg:col-span-1"
            >
              <img
                src="5204985.jpg"
                alt="How It Works Illustration"
                className="object-cover w-full h-80 md:h-full"
              />
            </motion.div>
            {/* Animated Steps */}
            <div className="w-full grid md:grid-cols-2 gap-4 col-span-1 md:col-span-3 lg:col-span-2">
              {[
                {
                  number: 1,
                  title: "Fill Out the Application Form",
                  description:
                    "Start by completing a simple form with your basic information. This helps us get to know you before creating your student profile.",
                },
                {
                  number: 2,
                  title: "Explore Opportunities",
                  description:
                    "Browse programs, workshops, internships, and government initiatives designed for Lagos students.",
                },
                {
                  number: 3,
                  title: "Engage & Give Feedback",
                  description:
                    "Participate in forums, share your ideas, and directly communicate with the Lagos State Government.",
                },
                {
                  number: 4,
                  title: "Grow & Succeed",
                  description:
                    "Access mentorship, skill-building programs, and career placements to build your future.",
                },
              ].map(({ number, title, description }) => (
                <motion.div
                  className="w-full"
                  key={number}
                  variants={itemVariants}
                >
                  <Step
                    number={number}
                    title={title}
                    description={description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-black py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 mx-auto space-y-2"
        >
          <motion.h3
            className="font-bold text-2xl md:text-3xl"
            variants={fadeUp}
          >
            What <span className="text-green-500">You</span> Can Do
          </motion.h3>
          <motion.p
            className="text-lg text-muted-foreground font-medium mb-12"
            variants={fadeUp}
          >
            Update Lagos empowers students to actively participate in shaping
            the future of their city.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {forums.map((work) => (
              <motion.div
                key={work.title}
                className="border border-gray-100 shadow-md rounded-md overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out"
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={work.image}
                  alt=""
                  height={600}
                  width={600}
                  sizes="55vw"
                  className="w-full object-cover h-[250px]  group-hover:scale-105 transition-all"
                />
                <div className="group-hover:bg-green-400 p-6 group-hover:text-white h-full group-hover:underline">
                  <h4 className="font-semibold text-lg mb-4">{work.title}</h4>
                  <p className="text-gray-400 group-hover:text-white">
                    {work.words}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-2 my-24 flex items-center justify-center flex-col py-20">
        <h3 className="font-bold text-4xl md:text-5xl">
          <span className="text-red-600">Join</span>{" "}
          <span className="text-yellow-600">the</span>{" "}
          <span className="text-blue-600">Movement</span>
        </h3>
        <p className="text-lg text-white font-medium mb-6">
          Be a part of the change for Update Lagos and start making a difference
          today!
        </p>

        <Button
          variant={"outline"}
          className="bg-blue-500 border-none text-white"
          size={"lg"}
          onClick={() => router.push("/programs")}
        >
          Sign Up Now
        </Button>
        {/* <UserForm /> */}
      </div>
    </>
  );
};

const Step = ({ number, title, description }) => {
  return (
    <div className="relative px-4 py-12 border">
      <div className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-600/50 text-white font-bold text-7xl flex-shrink-0 absolute z-0 right-2">
        {number}
      </div>
      <div className="z-3 relative">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Benefits;
