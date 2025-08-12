import React from 'react';

interface ArtsCultureProps {
  className?: string;
 
}

const ArtsCulture: React.FC<ArtsCultureProps> = ({ className = '' }) => {
  return (
    <div 
      className={`relative w-full min-h-screen bg-cover bg-center bg-no-repeat ${className}`}
      style={{backgroundImage: "url('/artsandculture.webp')"}}
    >
      {/* Dark overlay for better text readability when background image is used */}
     
        <div className="absolute inset-0 bg-black/40"></div>
     
      {/* Header Section */}
      <section className="w-full flex flex-wrap p-2 min-h-auto relative z-10">
        <div className="w-full flex flex-wrap p-0">
          <div className="w-full flex-grow flex flex-col min-w-[250px] break-words my-8 p-4 lg:my-7 lg:p-4">
            <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-tight text-white">
              DISCOVER ART AND CULTURE
            </h2>
            {/* Decorative spacing */}
            <div className="w-32 h-1 mt-2 bg-white"></div>
          </div>
        </div>
      </section>

      {/* Culture Description Section */}
      <section className="w-full flex flex-wrap py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="container-fluid w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center md:mt-32">
            <div className="w-full max-w-6xl">
              <div className="relative bg-gray-200/20 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden">
                {/* Card Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-700/20"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-center">
                  <p className="text-white text-center text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
                    At Pioneer Girls Junior School, our culture, morals, and values play a central role in shaping the educational experience and character development of our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtsCulture;