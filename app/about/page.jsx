import Image from "next/image";

const page = () => {
  return (
    <div className="py-24 min-h-screen w-full bg-white text-black">
      <div className="flex h-full items-center justify-between container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 mx-auto text-black flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-12">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-4 h-full my-6 items-center">
          <Image src="/green.jpg" alt="" height={1000} width={1000} />
          <p className="text-lg tracking-wide leading-8">
            <span className="text-2xl text-green-500 font-bold">
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
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 h-full my-6 items-center">
          <p className="text-lg tracking-wide text-justify leading-8">
            Students with verified identities should be able to enjoy benefits
            ranging from as little as school books, to huge discounts and
            offers, down to part-time work{" "}
            <span className="text-green-500 text-2xl font-semibold">
              opportunities
            </span>{" "}
            with the government as well as from private companies and businesses
            that understand our vision, and align with our goals. With us, you
            have a channel where your voice will be projected, as every student
            has the individual right to comment and express their grievances and
            expectations from the Lagos Government.
          </p>
          <Image src="/3026238.jpg" alt="" height={1000} width={1000} />
        </div>
        <div className="grid md:grid-cols-2 gap-4 h-full my-6 items-center">
          <Image src="/11201843.jpg" alt="" height={1000} width={1000} />
          <div>
            <p className="text-lg tracking-wide">
              Here is a couple of our dreams and aspirations we aim to achieve
              with our project:
            </p>

            <ul className="list-decimal px-8 space-y-2">
              <li>
                Grants & Loans to Students with verified identities to help with
                tuition, accommodation and other living costs in our community.
              </li>
              <li>
                Income & Student Finance Support programs, that partner with
                businesses and companies that understand our dreams for
                students, with massive discounts and offers, redeemable at
                retail shops upon presentation of the Student’s ID Card.
                Students should be able to have a wide range of discounts on
                travel, food, entertainment and retail.
              </li>
              <li>
                Employment and Support Allowance for students with disabilities.
                The disabled will not be left out, as every Lagos child retains
                the right to get proper education, without limitations due to
                their physical disabilities.
              </li>
              <li>
                Housing benefits: Many universities in Lagos offer on-campus
                accommodation. These can be made even more affordable at
                subsidized rates, cheap enough and convenient for Students to
                benefit from.
              </li>
              <li>
                Health Care: Students should be able to have access to free
                healthcare services, especially students from low-income
                backgrounds. Students should be able to apply for help with
                healthcare costs, such as prescriptions, dental care, eye care,
                etc.
              </li>
              <li>
                Public transport Discounts: Students should be able to benefit
                from discounted travels, and trips within the state, with
                reduced fares upon presentation of a Student ID card from any of
                the institutions in Lagos State. These benefits contribute to a
                supportive environment that enhances both the academic and
                personal development of students in Lagos State. These are our
                aims and goals we hope to achieve.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
