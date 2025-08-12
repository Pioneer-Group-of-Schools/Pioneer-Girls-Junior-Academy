import React from 'react';


const Location: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-[#bdd6f0] text-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover Our Location
          </h1>
          <div className='mt-4 h-1 w-24 bg-gray-900 mx-auto'></div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 md:min-h-screen">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1784669951307!2d37.08418157568869!3d-1.026141135398628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f1f03162239%3A0x91c97faef3f2aff1!2sPioneer%20Girls%20Junior%20Academy!5e0!3m2!1sen!2ske!4v1754656539942!5m2!1sen!2ske" 
        height="100%"
        className="border-0 w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Contact Section */}
      <div
        className="relative bg-cover bg-center text-white py-20 h-[500px] bg-fixed"
        style={{ backgroundImage: "url('/location.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center py-16 items-center justify-center">
            <h2 className="text-4xl font-bold mb-6">Feel free to contact us if you have any questions or concerns.</h2>
            <div className="max-w-2xl mx-auto space-y-3">
                
                <p className="text-lg">
                    <span className="font-semibold">Phone:</span>  020-503-8234
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Email:</span> admissions@pioneergirlsjuniorschool.co.ke
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Postal Address:</span>P.O. Box  33-01015 <br />Ithanga, Murang'a County, Kenya
                </p>
               
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Location;