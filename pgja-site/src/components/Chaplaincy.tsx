import React from 'react';

interface ChaplainProps {
  className?: string;
  backgroundImage?: string;
}

const Chaplaincy: React.FC<ChaplainProps> = ({ 
  className = '', 
  backgroundImage = "/chaplaincy1.webp" 
}) => {
  return (
    <div 
      className={`relative min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Dark overlay for better text readability when background image is used */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20"></div>
      )}
      
      {/* Header Section */}
      <section className="w-full flex flex-wrap p-2 min-h-auto relative z-10">
        <div className="w-full flex flex-wrap p-0">
          <div className="w-full flex-grow flex flex-col min-w-[250px] break-words my-8 p-4 lg:my-7 lg:p-4">
            <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold leading-tight text-white">
              CHAPLAINCY
            </h1>
            {/* Decorative spacing */}
            <div className="w-32 h-1 mt-2 bg-white"></div>
          </div>
        </div>
      </section>

      {/* Chaplaincy Description Section */}
      <section className="w-full flex flex-wrap py-8 sm:py-12 lg:py-16 relative z-10 md:mt-32">
        <div className="container-fluid w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative bg-gray-200/30 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden">
                {/* Card Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-700/20"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-left">
                  <div className="text-white space-y-6 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
                    <p>
                      Though the school was established as a Catholic institution, we are
                      open to parents and students from all faiths.
                    </p>
                    <p>
                      Our Pastoral team provides spiritual fellowship and guidance to all
                      students.
                    </p>
                    <p>
                      In addition, they organize safe spaces for clerics and students of
                      other faiths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chaplaincy;
