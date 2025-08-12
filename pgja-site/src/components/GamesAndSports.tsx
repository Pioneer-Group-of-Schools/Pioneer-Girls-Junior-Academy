import React from 'react';

interface GamesSportsProps {
  className?: string;
}

const GamesSports: React.FC<GamesSportsProps> = ({ className = '' }) => {
  const sports = [
    'Football (Soccer)',
    'Basketball',
    'Golf',
    'Volleyball',
    'Netball',
    'Athletics (Track and Field)',
    'Swimming',
    'Chess',
    'Badminton',
    'Table Tennis'
  ];

  return (
    <div 
      className={`w-full relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: "url('/gamesandsports.webp')" }}
    >
      {/* Dark overlay for better text readability when background image is used */}
      
      <div className="absolute inset-0 bg-black/50"></div>
      
      
      {/* Header Section */}
      <section className="w-full flex flex-wrap p-2 min-h-auto relative z-10">
        <div className="w-full flex flex-wrap p-0">
          <div className="w-full flex-grow flex flex-col min-w-[250px] break-words my-8 p-4 lg:my-7 lg:p-4 text-white">
            <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-tight">
              DISCOVER GAMES AND SPORTS
            </h1>
            {/* Decorative spacing */}
            <div className="w-32 h-1 mt-2 bg-[#bdd6f0]"></div>
          </div>
        </div>
      </section>

      {/* Sports List Section */}
      <section className="w-full flex flex-wrap py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="container-fluid w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative bg-[#bdd6f0]/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/20 overflow-hidden">
                {/* Card Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-center">
                  <p className="text-gray-900 text-center text-lg sm:text-xl lg:text-2xl mb-8 font-medium leading-relaxed">
                    We offer a variety of games and sports to cater to different interests and abilities.
                  </p>
                  
                  {/* Sports Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-5 lg:p-5 bg-[#bdd6f0]/5 rounded-lg backdrop-blur-sm">
                    {sports.map((sport, index) => (
                      <div 
                        key={index}
                        className="text-gray-900 text-sm sm:text-base lg:text-lg p-3 bg-white/30 rounded-md hover:bg-white/20 transition-colors duration-200 font-medium"
                      >
                        {sport}
                      </div>
                    ))}
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

export default GamesSports;