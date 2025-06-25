"use client";
import UserForm from "@/components/user-form";
import Image from "next/image";

const Page = () => {
  return (
    <div className="py-40 px-6 min-h-screen w-full bg-white text-black relative">
      <div className="absolute z-0 opacity-10 w-[100%] flex items-center justify-center top-0 md:top-4 xl:top-40 h-full left-0">
        <Image
          src="/6087298.jpg"
          height={1000}
          width={1000}
          alt=""
          className="w-full"
        />
      </div>
      <div className="max-w-3xl relative z-20 mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600">
          Update Lagos: Empowering Students in Need
        </h1>

        <p className="text-lg text-gray-700">
          Update Lagos is a student-centered initiative designed to support
          young people across Lagos who are facing financial, academic, and
          personal challenges.
        </p>

        <p className="text-lg text-gray-700">
          Whether you're struggling with tuition fees, housing, healthcare,
          transportation, or need general support — Update Lagos is here to
          listen, respond, and connect you with the right programs and
          resources.
        </p>

        <p className="text-lg text-gray-700">
          By filling out our support form, you help us understand your situation
          and ensure no student is left behind. Your information is safe and
          used exclusively to provide relevant assistance.
        </p>
        <UserForm />
      </div>
    </div>
  );
};

export default Page;
