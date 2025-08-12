import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
    const typewriterRef = useRef<number | null>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const fullText = 'Where the discovery of knowledge is as important as the knowledge itself.';

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typewriterRef.current = setTimeout(typeText, 50);
      }
    };

    typeText();

    return () => {
      if (typewriterRef.current) {
        clearTimeout(typewriterRef.current);
      }
    };
  }, []);

  // Button animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.34)), url("/landingpage.webp")`,
        }}
      >
        <div className="container mx-auto flex p-0">
          <div className="w-full flex flex-col justify-center items-start min-w-[250px] break-words px-4 mt-24">
            <h1 
              className="text-left text-3xl sm:text-2xl  md:text-3xl lg:text-4xl font-bold mt-12 min-h-[3rem] px-4 text-white z-10"
            >
              {displayedText}
              
            </h1>
            
            <a
              ref={buttonRef}
              href="/discover-who-we-are/"
              className={`
                inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold z-10 ml-2 mt-4
                rounded-lg shadow-lg transition-all duration-300 transform
                ${isButtonVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-24'
                }
                hover:scale-105 hover:shadow-xl
                text-md sm:text-base md:text-lg
              `}
              style={{
                background: 'linear-gradient(135deg, #5dbaf0ff 0%, #a7b0c0ff 100%)',
                borderBottom: '4px solid rgba(223, 241, 252, 0.79)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Discover Who We Are
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <div 
            className="bg-[#dcae3d] rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#dcae3d]">
              <h2 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl flex-1">
                Apply Grade 10
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <img 
                src="/pgsadmissionsflyer.webp" 
                alt="PGS Admissions Flyer"
                className="w-full h-auto max-w-full rounded-lg shadow-md"
                style={{ verticalAlign: 'middle' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-slate-400 rounded hover:bg-gray-400 text-sm font-semibold mx-4"
              >
                Close
              </button>
              <a
                href="https://enquireto.pioneergroupofschools.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                 className="px-4 py-2 bg-blue-900 hover:bg-[#b08a2f] text-white rounded text-sm font-semibold"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;