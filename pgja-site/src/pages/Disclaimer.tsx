import React from 'react';
import { Shield, AlertTriangle, FileText, Globe, Copyright, Settings } from 'lucide-react';

const DisclaimerSection: React.FC = () => {
  const disclaimerItems = [
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: "PIONEER GIRLS JUNIOR ACADEMY makes every effort to ensure the accuracy and reliability of the information provided on this website. However, we cannot guarantee that all information is error-free, complete, or current. PIONEER GIRLS JUNIOR ACADEMY shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the information provided on this website."
    },
    {
      icon: AlertTriangle,
      title: "Accuracy of Information",
      content: "The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose."
    },
    {
      icon: FileText,
      title: "No Professional Advice",
      content: "The information provided on this website is not intended to be a substitute for professional advice. Visitors to this website should not act upon the information provided without seeking professional guidance. PIONEER GIRLS JUNIOR ACADEMY does not provide any professional or legal advice through this website."
    },
    {
      icon: Globe,
      title: "Third-party Content",
      content: "This website may contain links or references to third-party websites, products, or services. These links are provided for convenience only and do not imply endorsement or approval by PIONEER GIRLS JUNIOR ACADEMY. We have no control over the content or actions of these third-party websites and shall not be responsible for any damages or losses arising from their use."
    },
    {
      icon: Copyright,
      title: "Copyright and Intellectual Property",
      content: "All content and materials on this website, including but not limited to text, graphics, logos, images, audio clips, and video clips, are the property of PIONEER GIRLS JUNIOR ACADEMY or its content suppliers and are protected by copyright and other intellectual property laws. Unauthorized use, reproduction, or distribution of any materials from this website is strictly prohibited."
    },
    {
      icon: Settings,
      title: "Modification of Terms",
      content: "PIONEER GIRLS JUNIOR ACADEMY reserves the right to modify, update, or amend the terms of this disclaimer at any time without prior notice. By continuing to use this website, you agree to be bound by the most current version of the disclaimer."
    }
  ];

  return (
    <div className="min-h-screen bg-[#dfecfaff] py-16 px-4">
      <div className="md:max-w-7xl max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex items-center justify-center w-15 h-15 bg-blue-900 rounded-full mb-6 shadow-lg mr-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 bg-clip-text  mb-4">
            Disclaimer
            <div className='w-24 h-1 bg-blue-900'></div>
          </h1>
        </div>

        {/* Disclaimer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {disclaimerItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50"
              >
                <div className="flex flex-col items-center text-left space-y-4 md:flex-row md:items-center md:text-left md:space-y-0 md:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f4a024] rounded-2xl flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Agreement to Terms
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  By using this website, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer. If you do not agree with any part of this disclaimer, please do not use this website. If you have any questions or concerns about this disclaimer, please contact us.
                  {"  "}
                  <span className="text-gray-900 font-medium">By email: </span>
                  <a 
                    href="mailto:groupit@pioneergroupofschools.co.ke" 
                    className="text-blue-900 font-semibold ml-2 hover:text-blue-800 transition-colors duration-200"
                  >
                    groupit@pioneergroupofschools.co.ke
                  </a>
                
                </p>
                
                 
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
           <span className="text-sm font-medium">
              Last updated: {new Date().toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerSection;