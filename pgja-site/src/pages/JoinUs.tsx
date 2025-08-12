import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question: 'How do I apply to Pioneer Girls Junior Academy?',
    answer: (
      <>
        <p>
          Pioneer Girls Junior Academy application process is free, transparent and open to all
          eligible students regardless of race, religion and social-economic class.
        </p>
        <div className="mt-4">
          <a
            href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-[#de9642] text-white text-xl font-semibold py-3 px-6 rounded shadow hover:bg-yellow-700"
          >
            Register to Join
          </a>
        </div>
      </>
    ),
  },
  {
    question: 'How do I get my child admitted to Pioneer Girls Junior Academy?',
    answer: (
      <p>
        Admission to Pioneer Girls Junior Academy is transparent and merit-based, solely on review
        of academic performance and talent.
      </p>
    ),
  },
  {
    question: 'When do I apply to Pioneer Girls Junior Academy?',
    answer: (
      <>
        <p>Applications to Pioneer Girls Junior Academy are open throughout the year.</p>
        <p>
          However, new students' application submission for Grade 7 positions are open from the 3rd
          week of November every year till the last week of January the following year.
        </p>
        <p>
          If there are still spaces available, applications can be submitted at any time throughout
          the calendar year.
        </p>
      </>
    ),
  },
];

const JoinUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e6e7e9ff] min-h-screen">
      <div className='min-h-[200px] bg-[#bdd6f0] flex flex-col justify-center items-start text-center px-4 py-12'>
        <h2 className="text-3xl font-bold text-center ">General Details Of Joining Pioneer Girls Junior Academy</h2>
        <div className='bg-gray-200 h-1 w-32 mt-2'/>

      </div>
      <div className='mt-16'>
        <div className="space-y-6  max-w-5xl mx-auto px-4 py-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 space-y-2 text-base">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 py-8">
        {[
          { text: 'Join Grade 7', href: '/join-us/grade-7' },
          { text: 'Join Grade 8', href: '/join-us/grade-8' },
          { text: 'Join Grade 9', href: '/join-us/grade-9' },
          {
            text: 'Join Now',
            href: 'https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F',
            external: true,
          },
        ].map(({ text, href, external }) => (
          external ? (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[250px] text-center bg-[#de9642] text-white text-xl font-bold py-3 px-6 rounded shadow hover:bg-yellow-700"
            >
              {text}
            </a>
          ) : (
            <Link
              key={text}
              to={href}
              className="min-w-[250px] text-center bg-[#de9642] text-white text-xl font-bold py-3 px-6 rounded shadow hover:bg-yellow-700"
            >
              {text}
            </Link>
          )
        ))}
      </div>
    </section>
  );
};

export default JoinUs;
