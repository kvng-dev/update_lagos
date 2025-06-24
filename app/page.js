"use client";
import Benefits from "@/components/benefits";
import Slider from "@/components/slider";
import Image from "next/image";
import CountUp from "react-countup";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaCommentDots,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="bg-white">
        <div className="flex flex-wrap  md:flex-nowrap gap-6 container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto py-16 relative">
          <StatsCard
            title="Registered Students"
            value={12458}
            icon={<FaUsers />}
            description="Total number of student accounts across Lagos"
          />
          {/* <StatsCard
            title="Graduates from Programs"
            value="5,213"
            // icon={<FaGraduationCap />}
            description="Completed one or more state-sponsored programs"
          /> */}
          <StatsCard
            title="Job Placements"
            value={1094}
            icon={<FaBriefcase />}
            description="Students matched to jobs or internships"
          />

          <StatsCard
            title="Innovations Launched"
            value={87}
            icon={<FaLightbulb />}
            description="Student-led projects funded or supported"
          />

          <StatsCard
            title="Feedback Submissions"
            value={3329}
            icon={<FaCommentDots />}
            description="Suggestions and reports from students"
          />
          <StatsCard
            title="Workshops Delivered"
            value={434}
            icon={<FaChalkboardTeacher />}
            description="Tech, leadership, and career workshops across schools"
          />
        </div>
      </div>
      <Benefits />

      <section className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Watch Our Story
          </h2>
          <p className="text-gray-600 mb-8">
            Discover how students in Lagos are transforming their futures
            through our programs.
          </p>
          <div className="relative pt-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="/unilag.mp4"
              controls
              playsInline
              preload="metadata"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
}

const StatsCard = ({ title, value, icon, description }) => {
  return (
    <div className="px-4 lg:px-6 py-0 w-full max-w-sm text-gray-800 border-r border-gray last:border-r-0">
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <h3 className="text-xs font-light uppercase text-green-800 tracking-wider">
            {title}
          </h3>

          {/* Always animate the value, regardless of icon */}
          <div className="text-4xl font-extrabold text-green-900">
            <CountUp start={0} end={value} duration={20.5} separator="," />
          </div>
        </div>
        {/* {icon && <div className="text-green-600 text-xl">{icon}</div>} */}
      </div>
      {description && (
        <p className="text-xs text-gray-400 mt-2">{description}</p>
      )}
    </div>
  );
};
