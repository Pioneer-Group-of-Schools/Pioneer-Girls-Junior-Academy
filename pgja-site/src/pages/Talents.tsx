import React from "react";
import { Link } from "react-router-dom";
import '../styles/pageorientation.css'

const Talents: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className=" w-full bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42, 44, 46, 0.48), rgba(42, 44, 46, 0.48)), url('/talents.webp')",
        }}
      >
        <div className="container mx-auto flex flex-wrap px-4 py-32 md:py-40  justify-center items-center md:mt-32 orientation-container">
          {/* Left Text */}
          <div className="w-full md:w-2/3 min-w-[250px] mb-8 md:mb-0">
            <h4 className="text-left text-white text-3xl md:text-5xl font-semibold ">
             At Pioneer Girls Junior we recognize every student's uniqueness and help them develop.
            </h4>
          </div>

          {/* Right Buttons */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-4 ">
            <Link
              to="/discover-talents/games-sports"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Games & Sports
            </Link>
            <Link
              to="/discover-talents/arts-culture"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Arts & Culture
            </Link>
            <Link
              to="/discover-talents/st-johns-ambulance"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover St. Johns Ambulance
            </Link>
            <Link
              to="/discover-talents/junior-golf"
              className="bg-[#de9642] hover:text-black text-gray-200 font-semibold text-lg py-3 px-6 w-fit min-w-[320px] rounded-md shadow-md hover:bg-[#bdd6f0] transition"
            >
              Discover Junior Golf
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talents;
