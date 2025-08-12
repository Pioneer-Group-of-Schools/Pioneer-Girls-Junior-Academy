import React from 'react';
import { ExternalLink, BookOpen, Users, Globe, Heart, Calculator, Wrench, Atom, TreePine, Church } from 'lucide-react';

interface SubjectSectionProps {
  subject: string;
  outcomes: string[];
  links: { text: string; url: string }[];
  bgImage: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}

const SubjectSection: React.FC<SubjectSectionProps> = ({ subject, outcomes, links, bgImage, icon, isReversed = false }) => (
  <div className="relative min-h-screen flex items-center py-20">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="absolute inset-0 bg-black/30" />
    
    {/* Content Container */}
    <div className="relative z-10 container mx-auto px-4">
      <div className={`flex items-center justify-center ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}`}>
        <div className="max-w-2xl w-full">
          {/* Opaque Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 border border-white/20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-900 rounded-xl shadow-lg">
                {icon}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">{subject}</h2>
            </div>
            
            {/* Learning Outcomes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-900 rounded-full" />
                Learning Outcomes
              </h3>
              <ul className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-700 flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-medium leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resource Links */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-200 rounded-full" />
                Resources & Materials
              </h4>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200 text-blue-800 hover:text-blue-900 group border border-blue-200/50"
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="font-medium text-sm leading-relaxed">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PathwayDetails: React.FC = () => {
  const subjects = [
    {
      subject: "Agriculture",
      outcomes: [
        "To understand Conservation of Resources",
        "To understand Food Production Processes",
        "Understanding Hygiene Practices",
        "Understanding Production Techniques"
      ],
      links: [
        { text: "AGRICULTURE AT GRADE 7 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade7-Design-Formatted-April-2024.pdf" },
        { text: "AGRICULTURE AT GRADE 8 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "AGRICULTURE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Agriculture-Grade-9-Formatted-April-2024.pdf" }
      ],
      bgImage: "/agriculture1.webp",
      icon: <TreePine className="w-7 h-7 text-white" />
    },
    {
      subject: "Creative Arts & Sports",
      outcomes: [
        "To understand Foundations of Creative Arts and Sports",
        "Practice Creating and performing",
        "Training & Coaching in various sports"
      ],
      links: [
        { text: "CREATIVE ARTS AND SPORTS GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/FG7-Creative-Arts-Sports-26-6-2024.pdf" },
        { text: "CREATIVE ARTS AND SPORTS GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/FG8-Creative-Arts-Sports-June-26-6-2024.pdf" },
        { text: "CREATIVE ARTS AND SPORTS GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/FG9-Creative-Arts-Sports-26-6-2024.pdf" }
      ],
      bgImage: "/artcolorful.webp",
      icon: <Users className="w-7 h-7 text-white" />
    },
    {
      subject: "Foreign Languages: French, Mandarin & German Languages",
      outcomes: [
        "Enhance Listening and Speaking skills",
        "Enhance Reading at level 1 and 2",
        "Enhance Grammar",
        "Enhance writing skills"
      ],
      links: [
        { text: "GERMAN AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-7-Design-Formatted-April-2024.doc.pdf" },
        { text: "FRENCH AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "MANDARIN AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mandarin-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "FRENCH AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "GERMAN AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-8-Formatted-April-2024.pdf" },
        { text: "MANDARIN AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mandarin-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "FRENCH AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/French-Grade-9-Design-Formatted-April-2024.pdf" },
        { text: "GERMAN AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/German-Grade-9-Design-Formatted-April-2024.pdf" },
        { text: "MANDARIN AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mandarin-Grade-9-Formatted-April-2024.pdf" }
      ],
      bgImage: "/foreignpgja.webp",
      icon: <Globe className="w-7 h-7 text-white" />
    },
    {
      subject: "Indigenous Languages",
      outcomes: [
        "Enhance Listening and Speaking skills",
        "Enhance Reading at level 1 and 2",
        "Enhance Grammar",
        "Enhance writing skills"
      ],
      links: [
        { text: "INDIGENOUS LANGUAGE AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "INDIGENOUS LANGUAGE AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "INDIGENOUS LANGUAGE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Indigenous-Languages-Grade-9-Formatted-April-2024.pdf" }
      ],
      bgImage: "/kenyaflag.webp",
      icon: <BookOpen className="w-7 h-7 text-white" />
    },
    {
      subject: "English & Kiswahili",
      outcomes: [
        "Enhance Listening and Speaking skills",
        "Enhance Reading at level 1 and 2",
        "Enhance Grammar",
        "Enhance writing skills"
      ],
      links: [
        { text: "ENGLISH AT GRADE 7 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/English-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "ENGLISH AT GRADE 8 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/English-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "ENGLISH AT GRADE 9 CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/English-Grade-9-Formatted-April-2024.pdf" },
        { text: "KISWAHILI AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Kiswahili-Grade-7-.pdf" },
        { text: "KISWAHILI AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Kiswahili-Grade-8-.pdf" },
        { text: "KISWAHILI AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Kiswahili-Grade-9.pdf" }
      ],
      bgImage: "/languages.webp",
      icon: <BookOpen className="w-7 h-7 text-white" />
    },
    {
      subject: "Religious Studies: Hindu Religious Education",
      outcomes: [
        "Enhance knowledge in Manifestations of Paramatma",
        "Reading Scriptures",
        "Understand fundamentals of Dharma",
        "Religious Practice",
        "Yog",
        "Understand rites of Passage"
      ],
      links: [
        { text: "HINDU RELIGIOUS EDUCATION AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "HINDU RELIGIOUS EDUCATION AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "HINDU RELIGIOUS EDUCATION AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Hindu-Religious-Education-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/hindu.webp",
      icon: <BookOpen className="w-7 h-7 text-white" />
    },
    {
      subject: "Religious Studies: Islamic Religious Education",
      outcomes: [
        "Gain knowledge in selected chapter of the Quran",
        "Gain knowledge in selected Hadith",
        "Understand pillars of Iman",
        "Practice devotional Acts",
        "Understand Akhlaq",
        "Learn about Muamalat",
        "Understand Islamic Heritage and Civilizations"
      ],
      links: [
        { text: "ISLAMIC RELIGIOUS EDUCATION AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "ISLAMIC RELIGIOUS EDUCATION AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-8-Formatted-12.3.2024.pdf" },
        { text: "ISLAMIC RELIGIOUS EDUCATION AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Islamic-Religious-Education-Grade-9-Formatted-12.3.2024.pdf" }
      ],
      bgImage: "/ire.webp",
      icon: <BookOpen className="w-7 h-7 text-white" />
    },
    {
      subject: "Religious Studies: Christian Religious Education",
      outcomes: [
        "Learning about Christianity",
        "Understand about creation",
        "Understand selected section of the bible",
        "Understand about the early life of Christ",
        "Practice selected form of Worship",
        "Understand about Christian living today"
      ],
      links: [
        { text: "CHRISTIAN RELIGIOUS EDUCATION AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "CHRISTIAN RELIGIOUS EDUCATION AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "CHRISTIAN RELIGIOUS EDUCATION AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/CRE-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/religioncross.webp",
      icon: <Church className="w-7 h-7 text-white" />
    },
    {
      subject: "Mathematics",
      outcomes: [
        "Understand Numbers",
        "Understand Algebra",
        "Understand Geometry",
        "Understand Measurements",
        "Understand Probability",
        "Data handling"
      ],
      links: [
        { text: "MATHS AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-7-Design-Formated-April-2024.pdf" },
        { text: "MATH AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "MATH AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Mathematics-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/keypad.webp",
      icon: <Calculator className="w-7 h-7 text-white" />
    },
    {
      subject: "Pre-Technical Studies",
      outcomes: [
        "Enhance foundations already established in upper primary pre-technical studies",
        "Enhance communication skills already established in upper primary pre-technical studies",
        "Understand material of production",
        "Understand tools and Production",
        "Understand entrepreneurship"
      ],
      links: [
        { text: "PRE-TECHNICAL AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-7-Formatted-April-2024.pdf" },
        { text: "PRE-TECHNICAL AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "PRE-TECHNICAL AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Pre-Technical-Studies-Grade-9.pdf" }
      ],
      bgImage: "/robotmachine.webp",
      icon: <Wrench className="w-7 h-7 text-white" />
    },
    {
      subject: "Integrated Sciences",
      outcomes: [
        "Develop skill in scientific investigations",
        "Understand mixtures, Elements and Compounds",
        "Explore and understand living things and the environment",
        "Understand about Force and Energy"
      ],
      links: [
        { text: "INTEGRATED SCIENCE AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-7-Design-Formatted-April-2024.pdf" },
        { text: "INTEGRATED SCIENCE AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-8-Design-Formatted-April-2024.pdf" },
        { text: "INTEGRATED SCIENCE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Integrated-Science-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/outerspace.webp",
      icon: <Atom className="w-7 h-7 text-white" />
    },
    {
      subject: "Social Sciences",
      outcomes: [
        "Develop skill in scientific investigations",
        "Understand mixtures, Elements and Compounds",
        "Explore and understand living things and the environment",
        "Understand about Force and Energy"
      ],
      links: [
        { text: "SOCIAL SCIENCE AT GRADE 7, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-7-Formatted-April-2024.pdf" },
        { text: "SOCIAL SCIENCE AT GRADE 8, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-8-Formatted-April-2024.pdf" },
        { text: "SOCIAL SCIENCE AT GRADE 9, CLICK HERE FOR MORE", url: "https://kicd.ac.ke/wp-content/uploads/2024/06/Social-Studies-Grade-9-Design-Formatted-April-2024.pdf" }
      ],
      bgImage: "/socialsci.webp",
      icon: <Users className="w-7 h-7 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/tailormade.webp')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              {/* Hero Opaque Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 border border-white/20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8  bg-clip-text text-slate-900 text-center">
                  GRADE 7, 8 & 9 PATHWAYS PROGRAM
                </h1>
                
                {/* About Section */}
                <div className="mb-10">
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base lg:text-lg">
                    <p className="font-medium">
                      At Pioneer Girls Junior Academy, you will discover that since our establishment, our school has built a strong reputation for its commitment to trustworthiness, integrity, and academic excellence. As one of the leading Girls' Junior Secondary schools in the country, we are known for our dedication to excellence, resilience, and fostering holistic development in our students.
                    </p>
                    
                    <p className="font-medium">
                      Our mission is to guide children in their journey towards becoming responsible and well-rounded adults who actively contribute to their communities. At our school, students are equipped with the skills and mindset to navigate life's challenges with confidence, accountability, thoughtfulness, engagement, and innovation.
                    </p>
                  </div>
                </div>

                {/* Three Column Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {/* Academic Excellence */}
                  <div className="p-6 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-blue-900 mb-3">Academic Excellence</h3>
                    <p className="text-blue-900 text-md leading-relaxed">
                      Our curriculum strikes a balance between rigorous academic standards and engaging teaching methods that promote creativity, innovation, and an exciting learning experience.
                    </p>
                  </div>

                  {/* Holistic Development */}
                  <div className="p-6 rounded-xl border border-orange-200">
                    <div className="w-12 h-12 bg-[#de9642] rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[#de9642] mb-3">Holistic Development</h3>
                    <p className="text-[#de9642] text-smd leading-relaxed">
                      We integrate academic, co-curricular, and extracurricular activities with state-of-the-art sports facilities and opportunities for local and national competitions.
                    </p>
                  </div>

                  {/* Character Building */}
                  <div className=" p-6 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-blue-400 mb-3">Character Building</h3>
                    <p className="text-blue-400 text-md leading-relaxed">
                      Students embark on exciting field trips and Presidential Awards programs, gaining independence, self-reliance, and essential life skills.
                    </p>
                  </div>
                </div>

                {/* School of Choice Banner */}
                <div className="bg-[#de9642] p-6 rounded-xl mb-8 text-center">
                  <p className="text-white text-lg font-bold">
                    🏆 The School of Choice for those who value student discipline as a key factor in achieving success
                  </p>
                  <p className="text-orange-100 text-sm mt-2">
                    Our team of highly motivated and enthusiastic educators is committed to upholding the highest education standards, both within and beyond the classroom.
                  </p>
                </div>

                {/* CBC Curriculum Section */}
                <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    🎯 Competency-Based Education (CBE)
                  </h3>
                  <p className="text-blue-700 mb-4 leading-relaxed">
                    Discover a dynamic curriculum that builds on the Competency-Based Education (CBE) introduced in Upper Primary. Our comprehensive curriculum empowers learners to explore their talents, interests, and abilities, guiding them towards their chosen pathways in Senior Secondary Education.
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Core Competencies Focus:</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 text-md">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Communication & Collaboration</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Critical Thinking</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Creativity & Imagination</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Citizenship</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Digital Literacy</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Learning to Learn</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Self-efficacy</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-center">Problem Solving</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-700 mt-4 text-md">
                    Our curriculum offers interactive and differentiated learning experiences with suggested resources and assessment techniques to facilitate effective learning outcomes and ensure a smooth transition to Senior Secondary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Sections */}
      {subjects.map((subject, index) => (
        <SubjectSection
          key={index}
          subject={subject.subject}
          outcomes={subject.outcomes}
          links={subject.links}
          bgImage={subject.bgImage}
          icon={subject.icon}
          isReversed={index % 2 === 1}
        />
      ))}

      {/* Footer */}
      <div className="relative min-h-[40vh] flex items-center bg-slate-200">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-[#de9642] backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Join us in making learning interesting, exciting, and enjoyable!
              </h3>
              <p className="text-white/90 text-lg">
                Empowering the next generation through innovative education and holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathwayDetails;