import React from 'react';
import { Heart, Pill, Stethoscope } from 'lucide-react';

interface NursingFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImage: string;
  reverse?: boolean;
}

const NursingFeature: React.FC<NursingFeatureProps> = ({ 
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
            <div className={`w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full ${reverse ? 'lg:ml-auto' : ''} mx-auto lg:mx-0`} />
          </div>
          
          {/* Empty Column for Spacing */}
          <div className={`lg:col-span-6 ${reverse ? 'lg:col-start-1' : 'lg:col-start-7'}`} />
        </div>
      </div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
    <div className="absolute bottom-8 left-8 w-2 h-2 bg-green-400/50 rounded-full animate-ping" />
  </div>
);

const NursingCare: React.FC = () => {
  const nursingFeatures = [
    {
      title: "24 Hour Nursing Care",
      description: "Our dedicated team of healthcare professionals are committed to providing compassionate and comprehensive nursing care to ensure the well-being and safety of all students around the clock.",
      icon: <Heart className="w-12 h-12 text-red-400" />,
      bgImage: "/nursing1.webp",
      reverse: false
    },
    {
      title: "Fully Stocked with Medicines",
      description: "We provide free of charge medication to our students for minor injuries and illness. Our clinic is fully stocked with the appropriate medications to meet your child's needs and ensure quick recovery.",
      icon: <Pill className="w-12 h-12 text-green-400" />,
      bgImage: "/nursing2.webp",
      reverse: true
    },
    {
      title: "Doctors That Care",
      description: "We have regular clinic days run by highly qualified, local doctors. Our mission is to provide a safe and nurturing environment for all patients with professional medical expertise available when needed.",
      icon: <Stethoscope className="w-12 h-12 text-blue-400" />,
      bgImage: "/nursing3.webp",
      reverse: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-red-400/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <Heart className="w-6 h-6 text-red-600" />
              <span className="text-gray-900 font-medium">Healthcare Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Comprehensive Nursing Care
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
              Professional healthcare services and medical support designed to keep students healthy, safe, and ready to learn.
            </p>
          </div>
        </div>
      </div>

      {/* Nursing Features */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="space-y-12 lg:space-y-16">
          {nursingFeatures.map((feature, index) => (
            <div key={index} className="w-full">
              <NursingFeature
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Child's Health is Our Priority
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Our comprehensive healthcare services ensure that students receive the medical attention they need, when they need it, in a caring and professional environment.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="flex items-center gap-2 text-gray-900 bg-blue-400/10 rounded-xl p-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">24/7 Care</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900 bg-blue-400/10 rounded-xl p-2">
                <Pill className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Free Medication</span>
              </div>
              <div className="flex items-center gap-2 text-gray-900 bg-blue-400/10 rounded-xl p-2">
                <Stethoscope className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Qualified Doctors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NursingCare;