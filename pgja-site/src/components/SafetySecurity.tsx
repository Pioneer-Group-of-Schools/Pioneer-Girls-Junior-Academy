import React from 'react';
import { Shield, Heart, AlertTriangle } from 'lucide-react';

interface SecurityFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
  reverse?: boolean;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ 
  title, 
  description, 
  icon, 
  bgImage, 
  reverse = false 
}) => (
  <div className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[500px] lg:min-h-[600px]">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    
    {/* Content */}
    <div className="relative z-10 h-full flex items-center">
      <div className="w-full px-6 py-12 lg:px-12 lg:py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${reverse ? 'lg:text-right' : ''}`}>
          {/* Content Column */}
          <div className={`lg:col-span-6 ${reverse ? 'lg:col-start-7' : 'lg:col-start-1'} space-y-6`}>
            {/* Icon */}
            <div className={`flex ${reverse ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                {icon}
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            {/* Decorative Element */}
            <div className={`w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full ${reverse ? 'lg:ml-auto' : ''} mx-auto lg:mx-0`} />
          </div>
          
          {/* Empty Column for Spacing */}
          <div className={`lg:col-span-6 ${reverse ? 'lg:col-start-1' : 'lg:col-start-7'}`} />
        </div>
      </div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
    <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400/50 rounded-full animate-ping" />
  </div>
);


const SafetySecurity: React.FC = () => {
  const securityFeatures = [
    {
      title: "First Aid and Safety Certified",
      description: "Our school is Occupational health and safety certified, while our staff is trained to meet all kinds of first aid situations that may occur at the school. We maintain the highest standards of medical preparedness and emergency response.",
      icon: <Heart className="w-12 h-12 text-red-400" />,
      bgImage: "/safety.webp",
      reverse: false
    },
    {
      title: "Security and Access",
      description: "Our school prioritizes the safety and security of our students, staff, and visitors through a comprehensive and proactive approach. The security measures are designed to create a secure learning environment where everyone can focus on education without concerns about safety.",
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      bgImage: "/security3.webp",
      reverse: true
    },
    {
      title: "Emergency Prepared",
      description: "Our school's commitment to safety encompasses all students, staff, and visitors through a thorough and proactive fire and safety strategy. This includes fire extinguishers, surveillance cameras, and accessible routes for fire and medical emergencies.",
      icon: <AlertTriangle className="w-12 h-12 text-red-400" />,
      bgImage: "/safety2.webp",
      reverse: false
    }
  ];


  return (
    <div className="min-h-screen bg-slate-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-blue-400/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <Shield className="w-6 h-6 text-blue-300" />
              <span className="text-gray-900 font-medium">Safety & Security Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Your Safety is Our Priority
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
              Comprehensive security measures and emergency preparedness designed to create a safe, secure learning environment for all.
            </p>
            
            
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="space-y-12 lg:space-y-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="w-full">
              <SecurityFeature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                bgImage={feature.bgImage}
                reverse={feature.reverse}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Peace of Mind for Parents
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Our comprehensive safety protocols ensure that students can focus on learning in a secure, well-protected environment where their wellbeing is our top priority.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="flex items-center gap-2 text-gray-900 bg-blue-400/10 rounded-xl p-2">
                <Shield className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Certified Safe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900 bg-blue-400/10  rounded-xl p-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">First Aid Ready</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900 bg-blue-400/10  rounded-xl p-2">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Emergency Prepared</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySecurity;