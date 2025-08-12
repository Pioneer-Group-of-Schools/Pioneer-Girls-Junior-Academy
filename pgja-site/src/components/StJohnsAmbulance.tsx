import React from 'react';

interface StJohnAmbulanceProps {
  className?: string;
 
}

const StJohnAmbulance: React.FC<StJohnAmbulanceProps> = ({ className = '' }) => {
  const services = [
    {
      title: "Comprehensive First Aid Training ⛑️",
      description: "The St. John Club offers hands-on first aid training, including CPR, wound management, and patient assessment, empowering girls with the skills to respond effectively to medical emergencies."
    },
    {
      title: "Community Outreach & Service 🤝",
      description: "Members of the St. John Club actively engage in community outreach and service projects, volunteering at public events, teaching first aid classes, and promoting health and safety initiatives."
    },
    {
      title: "Leadership Development 🌟",
      description: "The club provides opportunities for personal growth and leadership development, allowing members to take on leadership roles, organize events, and serve as mentors to their peers."
    }
  ];

  return (
    <div 
      className={`relative min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url('/stjohnspage.webp')` }}
    >
      {/* Dark overlay for better text readability when background image is used */}
      <div className="absolute inset-0 bg-black/40"></div>
     
      
      {/* Header Section */}
      <section className="w-full flex flex-wrap p-2 min-h-auto relative z-10">
        <div className="w-full flex flex-wrap p-0">
          <div className="w-full flex-grow flex flex-col min-w-[250px] break-words my-8 p-4 lg:my-7 lg:p-4">
            <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight text-white">
              DISCOVER COMMUNITY SERVICE WITH ST JOHN AMBULANCE
            </h1>
            {/* Decorative spacing */}
            <div className="w-32 h-1 mt-2 bg-white"></div>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section className="w-full flex flex-wrap relative z-10 justify-center items-center py-10 md:mt-48">
        <div className="container-fluid w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-gray-200/30 backdrop-blur-md rounded-lg shadow-xl border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200"
                  >
                    <div className="relative z-10">
                      <h5 className="text-white text-lg sm:text-xl font-semibold mb-4 leading-tight">
                        {service.title}
                      </h5>
                      <p className="text-white text-md sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StJohnAmbulance;