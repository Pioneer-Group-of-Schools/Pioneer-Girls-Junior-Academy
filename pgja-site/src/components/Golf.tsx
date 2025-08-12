import React from 'react';

interface GolfProps {
  className?: string;
  backgroundImage?: string;
}

const Golf: React.FC<GolfProps> = ({ className = '' }) => {
  return (
    <div 
      className={`relative min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: 'url("/juniorgolf.webp")' }}
    >
      {/* Dark overlay for better text readability when background image is used */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      
      {/* Header Section */}
      <section className="w-full flex flex-wrap p-2 min-h-auto relative z-10">
        <div className="w-full flex flex-wrap p-0">
          <div className="w-full flex-grow flex flex-col min-w-[250px] break-words my-8 p-4 lg:my-7 lg:p-4">
            <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold leading-tight text-white">
              DISCOVER JUNIOR GOLF
            </h1>
            
            {/* Decorative spacing */}
            <div className="w-32 h-1 mt-2 bg-white"></div>
          </div>
        </div>
      </section>

      {/* Golf Program Description Section */}
      <section className="w-full flex flex-wrap py-8 sm:py-12 lg:py-16 relative z-10 md:mt-20">
        <div className="container-fluid w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="relative bg-gray-200/40 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden">
                {/* Card Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-700/20"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-left">
                  <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8 font-medium leading-relaxed">
                    The golf program at Pioneer Girls Junior is more than just swinging clubs and sinking putts. It's a dynamic platform where young girls not only hone their golfing skills but also cultivate valuable life lessons and friendships on the green terrain.
                  </p>
                  <br />
                  <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
                    The program is designed to cater to girls of all skill levels, from beginners to advanced players. The instructors understand that every girl is unique and progresses at her own pace. Therefore, they foster an inclusive and supportive environment where girls feel empowered to embrace challenges and strive for improvement.
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

export default Golf;