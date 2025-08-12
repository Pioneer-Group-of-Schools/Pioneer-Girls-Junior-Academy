
import React from "react";
import { Link } from "react-router-dom";

const StudentLife: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center h-[100vh]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42, 44, 46, 0.48), rgba(42, 44, 46, 0.48)), url('/pathways2.webp')",
        }}
      >
        <div className="container mx-auto flex flex-wrap px-4 py-32 md:py-40 flex justify-center items-center mt-20">
          {/* Left Text */}
          <div className="w-full md:w-2/3 min-w-[250px] mb-8 md:mb-0">
            <h1 className="text-left text-white text-4xl md:text-5xl font-bold ">
              Discover Our Student Life
            </h1>
          </div>

          {/* Right Buttons */}
          <div className="w-full md:w-1/3 min-w-[250px] flex flex-col justify-center items-center mt-20 gap-4 ">
            <Link
              to="/student-life/nursing-care"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Our Nursing Care
            </Link>
            <Link
              to="/student-life/safety-security"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Our Safety & Security
            </Link>
            <Link
              to="/student-life/boarding-life"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Our Boarding Life
            </Link>
            <Link
              to="/student-life/chaplaincy"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Our Chaplaincy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
