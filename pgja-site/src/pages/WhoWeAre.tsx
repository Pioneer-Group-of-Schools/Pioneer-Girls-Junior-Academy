import React from 'react';

interface DiscoverSectionProps {
  backgroundImage?: string;
}

const DiscoverWhoWeAre: React.FC<DiscoverSectionProps> = ({ 
  backgroundImage = "/discoverwhoweare.webp"
}) => {
  const handleDiscoverHistory = () => {
    window.location.href = '/discover-who-we-are/history';
  };

  return (
    <div className="min-h-screen">
      {/* Main Discover Section */}
      <div 
        className="flex flex-wrap p-2 bg-center bg-no-repeat bg-cover min-h-screen relative"
        style={{
          backgroundImage: ` url("${backgroundImage}")`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-60'/>
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 p-4 z-20">

          {/* Introduction Text */}
          <div className="container mx-auto px-2 py-10 md:justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Discover Who We Are
            </h1>
            <div className="mb-4 h-1 w-24 bg-[#de9642]"></div>
            <p className="text-white text-lg sm:text-md md:text-2xl font-light leading-relaxed text-left">
              At Pioneer Girls Junior Academy, we are dedicated to cultivating values and discipline in our student population, setting a high standard for excellence.
              <br/>
              
            </p>
            <p className='mt-4 text-white text-lg sm:text-md md:text-2xl font-light leading-relaxed text-left'>We are enthusiastic about embarking on an educational journey of exploration and pushing the boundaries of what is possible!</p>
          </div>

          {/* Mission and Purpose Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* School's Mission Card */}
            <div className="bg-white/30 backdrop-blur-xl rounded-xl shadow-lg p-6 transform hover:scale-95 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-[#de9642] mb-4">Our Mission</h2>
              <p className="text-white text-lg sm:text-md md:text-2xl font-light">
                To cultivate a vibrant and inclusive learning community where students are empowered to embrace their full potential, fostering intellectual curiosity, ethical character, and a lifelong commitment to contributing meaningfully to the world.
              </p>
            </div>

            {/* Purpose Card */}
            <div className="bg-white/30 backdrop-blur-xl rounded-xl shadow-lg p-6 transform hover:scale-95 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-[#de9642] mb-4">Our Purpose</h2>
              <p className="text-white text-lg sm:text-md md:text-2xl font-light">
                To provide a holistic education that nurtures the development of well-rounded individuals, equipping them with the knowledge, skills, and values necessary to live a life of abundance rich in intellectual growth, personal fulfillment, and positive impact on society.
              </p>
            </div>
          </div>

          {/* Discover History Button */}
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={handleDiscoverHistory}
              type="button"
              className="bg-[#de9642] hover:bg-yellow-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl px-8 py-4 text-lg sm:text-xl md:text-2xl"
            >
              Discover Our History
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiscoverWhoWeAre;
