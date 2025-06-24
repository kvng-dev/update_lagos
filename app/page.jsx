"use client";
import Benefits from "@/components/benefits";
import Slider from "@/components/slider";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  FaChalkboardTeacher,
  FaCommentDots,
  FaUsers,
  FaWheelchair,
} from "react-icons/fa";

export default function Home() {
  const [registeredStudents, setRegisteredStudents] = useState(null);

  useEffect(() => {
    async function fetchUserCount() {
      try {
        const res = await fetch("/api/users/count");
        const data = await res.json();
        setRegisteredStudents(data.count);
      } catch (error) {
        console.error("Failed to fetch user count:", error);
      }
    }
    fetchUserCount();
  }, []);
  return (
    <div>
      <Slider />
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto py-16 relative">
          <StatsCard
            title="Registered Students"
            value={registeredStudents ?? 0}
            icon={<FaUsers />}
            description="Total number of student accounts across Lagos"
          />

          <StatsCard
            title="Helped Students with Disabilities"
            value={87}
            icon={<FaWheelchair />}
            description="Support and resources provided to students with disabilities"
          />

          <StatsCard
            title="Loans Granted"
            value={3329}
            icon={<FaCommentDots />}
            description="Number of financial loans granted to students"
          />

          <StatsCard
            title="School Fees Paid"
            value={434}
            icon={<FaChalkboardTeacher />}
            description="Financial support provided to help students pay school fees"
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
