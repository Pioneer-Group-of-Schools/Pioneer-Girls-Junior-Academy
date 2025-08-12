import React from "react";
import { Link } from "react-router-dom";

const HistorySection: React.FC = () => {
  return (
    <section className="bg-[#f8efe1ff] text-start px-4 py-8">
      <div className="w-full">
      {/* Title Section */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 py-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Discover Our History
          </h1>
          <div className="mt-4 h-1 w-24 bg-[#de9642]"></div>
        </div>
      </div>
      {/* First Card Section */}
      <div className="">
        <div className="w-full shadow-lg overflow-hidden">
          <div
            className="h-96 md:h-[600px] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/tractor.webp')" }}
          />
          <div className="p-6 space-y-4 text-lg text-gray-800">
            <p>
              Pioneer Girls Junior Academy is nestled and surrounded by large
              acreage of pineapple farms in Thika that have been around since
              the 1910s.
            </p>
          
            <div className="mt-4 h-px w-24 bg-[#de9642]"></div>
            <p>
              But prior to the establishment of the school, the property once
              housed Braeburn Imani School in the early 2000s before their
              departure in the mid-2010s.
            </p>
           
            <div className="mt-4 h-px w-24 bg-[#de9642]"></div>
            <p>
              Thereafter, Pioneer Girls School opened its doors in the spacious
              75-acre property and sooner rather than later, Pioneer Girls
              Junior Academy joined.
            </p>
          </div>
        </div>
      </div>

      {/* Second Card Section */}
      <div className="">
        <div className=" shadow-lg overflow-hidden">
          <div
            className="h-96 md:h-[600px] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/pinkplant.webp')" }}
          />
          <div className="p-6 space-y-4 text-lg text-gray-800">
            <p>
              Though young, Pioneer Girls Junior Academy has quickly gained and
              attained the reputation of being at the forefront of shaping the
              future of girls' education since its establishment in 2022.
            </p>
            <div className="mt-4 h-px w-24 bg-[#de9642]"></div>
            <p>
              As a renowned private upper primary boarding school exclusively
              for girls, our mission is to empower young girls through
              high-quality education.
            </p>
            <div className="mt-4 h-px w-24 bg-[#de9642]"></div>
            <p>
              Our unwavering dedication to excellence and empowerment has been
              evident ever since the inception of Pioneer Girls School in 2016,
              establishing us as a trusted educational institution in Muranga
              County.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                to="/discover-Who-We-Are/leadership/"
                className=" px-6 py-3 text-white font-bold text-lg md:text-xl bg-[#de9642] hover:bg-yellow-700 transition rounded-md text-center"
              >
                Discover our Leadership
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HistorySection;
