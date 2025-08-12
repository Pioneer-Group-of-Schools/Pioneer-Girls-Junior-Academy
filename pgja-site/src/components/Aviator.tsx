
import React from "react";
import { Link } from "react-router-dom";

const Aviation: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 bg-slate-200">
      {/* Background Section 1 */}
      <section
        className="flex flex-wrap w-full p-2 min-h-[300px] md:min-h-[500px] lg:min-h-[700px] bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('/aviationtoy.webp')",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-4 my-32 md:my-64">
          {/* Empty content section */}
        </div>
      </section>

      {/* Text Content Section */}
      <section className="flex flex-wrap w-full p-4 my-16">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full min-w-[250px] break-words flex flex-col">
            <h1 className="text-left text-xl md:text-2xl text-[#2a2c2e]">
              The Junior Aviator program at Pioneer Girls Junior Academy is an
              initiative aimed at sparking interest in aviation among young
              girls.
            </h1>
          </div>
        </div>
      </section>

      {/* Background Section 2 - Full height with overlay */}
      <section
        className="relative flex flex-wrap w-full min-h-[600px] md:min-h-[800px] bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/junioraviators.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/5 z-0" />
        <div className="relative container-fluid mx-auto flex flex-wrap p-0 z-10">
          <div className="flex-grow flex flex-col justify-center min-w-[250px] w-full"></div>
        </div>
      </section>

      {/* Text Content Section 2 */}
      <section className="flex flex-wrap w-full p-4 my-16">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full min-w-[250px] break-words flex flex-col">
            <h1 className="text-left text-xl md:text-2xl text-[#2a2c2e]">
              This program introduces students to the fascinating world of
              aviation, blending theoretical knowledge with hands-on experiences
              to cultivate their passion for flying and aeronautical sciences.
            </h1>
          </div>
        </div>
      </section>
      <div className="pt-4 flex justify-start mb-10 md:ml-48 mx-auto">
              <Link
                to="/junior-coder"
                className=" px-6 py-3 text-white font-bold text-lg md:text-xl bg-[#de9642] hover:bg-[#bdd6f0] transition rounded-md text-center"
              >
                Discover our Junior Coder
              </Link>
            </div>
    </div>
  );
};

export default Aviation;
