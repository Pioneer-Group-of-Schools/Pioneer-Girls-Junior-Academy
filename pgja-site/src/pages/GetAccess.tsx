import React from 'react';

interface ResourceButton {
  label: string;
  url: string;
  fontSize?: 'text-lg' | 'text-xl' | 'text-2xl';
}

const GetAccess: React.FC = () => {
  const resourceButtons: ResourceButton[] = [
    {
      label: "KICD JUNIOR SCHOOL (CBC)",
      url: "https://kicd.ac.ke/cbc-materials/curriculum-designs/junior-school-curriculum-designs/",
      fontSize: "text-xl"
    },
    {
      label: "NATIONAL CURRICULUM POLICY",
      url: "https://kicd.ac.ke/curriculum-reform/national-curriculum-policy/",
      fontSize: "text-lg"
    },
    {
      label: "MINISTRY OF EDUCATION",
      url: "https://education.go.ke/",
      fontSize: "text-xl"
    },
    {
      label: "CBA PARENT PORTAL",
      url: "https://cba.knec.ac.ke/Parent/",
      fontSize: "text-xl"
    },
    {
      label: "NEMIS REGISTRATION PORTAL",
      url: "https://nemis.education.go.ke/",
      fontSize: "text-lg"
    },
    {
      label: "KNEC PORTAL",
      url: "https://www.knec-portal.ac.ke/",
      fontSize: "text-xl"
    },
    {
      label: "PRESIDENTIAL WORKING PARTY ON EDUCATION REFORM 2023",
      url: "https://www.education.go.ke/node/429",
      fontSize: "text-lg"
    }
  ];

  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-900/20 to-gray-900/20 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `linear-gradient(0deg, rgba(42, 44, 46, 0.13), rgba(42, 44, 46, 0.13)), url('/getaccessjn.webp')`
           }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-full flex flex-col justify-center min-w-[250px] px-4 py-16 lg:my-64">
              <h1 className="text-left font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Get Access to Information And Resources
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="relative min-h-[200px] flex items-center justify-center bg-[#dfecfaff] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full flex flex-col justify-center min-w-[250px] px-4 py-16 lg:my-64">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {resourceButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(button.url)}
                    className={`
                      ${button.fontSize || 'text-lg'}
                      min-w-[280px] sm:min-w-[350px] lg:min-w-[400px]
                      min-h-[50px] h-auto
                      w-full sm:w-auto
                      px-6 py-3
                      bg-[#de9642] hover:bg-yellow-700 
                      text-white font-medium
                      rounded-lg shadow-lg
                      transition-all duration-300
                      hover:shadow-xl hover:scale-105
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                      active:scale-95
                      break-words text-center
                    `}
                    type="button"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAccess;