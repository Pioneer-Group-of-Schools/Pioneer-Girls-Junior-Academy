import React from 'react';
import { Link } from 'react-router-dom';

const Leadership: React.FC = () => {
  return (
    <section className="mx-auto py-12 px-2 bg-[#d4d4d4]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 md:ml-10">
          <img
            src="/headmistress.webp"
            alt="headmistress pioneer girls junior"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-center mt-10 md:mt-0">
          <Link
            to="/discover-pathways"
            className="text-white text-xl font-bold px-6 py-3 rounded-md bg-[#de9642] hover:bg-[#bdd6f0]"
          >
            Discover Pathways
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
