import React from 'react';
import {Link} from 'react-router-dom'

const JoinGrade7: React.FC = () => {
 

  return (
    <div className="bg-[#e6e7e9ff]">

      {/* --- Background Banner --- */}
      <section
        className="min-h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/joingrade7.webp')",
        }}
      />

      {/* --- Eligibility Requirements --- */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2A2C2E] mb-8">
         ELIGIBILTY REQUIREMENTS FOR JOINING GRADE 7  <br />
          <div className='h-1 w-32 bg-black mt-2'/>
        </h2>
        <div className="space-y-4 text-gray-800 text-lg">
          <p>1. The student requires to attain a <strong>minimum score or higher of "Met Expectations"</strong>  on their <strong>Upper Primary Grade 6 KPSEA exam.</strong> </p>
          <p>2. The student must provide an <strong> original certificate (KPSEA)</strong>. (Please first supply us with the original; a copy of the original will be kept by the school) </p>
          <p>3. The student must have a <strong>NEMIS/Assessment Number or Foreign students must have a unique identification number</strong>  from the Ministry of Education of the country of origin.</p>
          <p>4. The student must Pass a <strong>medical examination</strong>.</p>
          <p>5. The student must Provide a recent <strong>report form for Grade 5 and Grade 6</strong>. (Original must be submitted; a copy will be kept.)</p>
          <p>6. The student must Submit a <strong>Leaving Certificate in English</strong> before school starts. (Original retained.)</p>
          <p>7. The student must Provide a <strong>recommendation letter</strong> from your previous principal.</p>
          <p>8. The student must Submit a <strong>valid Birth Certificate</strong> or for foreigners, a valid <strong>passport</strong>. (Original submitted; copy retained.)</p>
        </div>
      </section>

      {/* --- How to Apply --- */}
      <section className="bg-[#bdd6f0] py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-[#2A2C2E] mb-4">HOW TO APPLY</h3>
        <p className="text-lg mb-6">
          Apply online, download the form and submit it to our offices, or visit in person to complete the application.
          <br />
         
        </p>
        <div className="text-center">
          <a
           href='https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F'
           target='_blank'
           rel='noopener noreferrer'
            className="bg-[#de9642] hover:bg-yellow-700 text-white font-bold px-8 py-4 text-xl rounded-lg shadow-md"
          >
            Make an Enquiry
          </a>
        </div>
      </section>

      {/* --- What Happens Next --- */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl text-[#2A2C2E] mb-4 font-bold">WHAT HAPPENS NEXT?</h3>
        <div className="space-y-4 text-gray-800 text-lg">
          <p>1. Review of application forms to confirm completeness and required documents.</p>
          <p>2. Invite eligible applicants for a school tour and interview.</p>
          <p>3. Select candidates based on interview performance and internal review.</p>
          <p>4. Send <strong>Offer Letters</strong> to selected students.</p>
          <p>5. Students respond with <strong>Acceptance Letters</strong> and pay commitment fees.</p>
          <p>6. After acceptance, the student receives the <strong>Official Admission Letter</strong>.</p>
        </div>
      </section>

      {/* --- Additional Options --- */}
      <section className="py-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        <Link
          to={'/join-us/grade-8'}
          className="min-w-[300px] bg-[#de9642] hover:bg-yellow-700 text-white font-bold text-3xl px-6 py-4 rounded-lg shadow-md"
        >
          Join Grade 8
        </Link>
        <Link
          to={'/join-us/grade-9'}
          className="min-w-[300px] bg-[#de9642] hover:bg-yellow-700 text-white font-bold text-3xl px-6 py-4 rounded-lg shadow-md"
        >
          Join Grade 9
        </Link>
      </section>
    </div>
  );
};

export default JoinGrade7;
