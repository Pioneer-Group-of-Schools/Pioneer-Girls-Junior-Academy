
import { Link } from 'react-router-dom';

const feesData = [
  { title: 'Grade 7 Fees', url: '/fees/grade-7' },
  { title: 'Grade 8 Fees', url: '/fees/grade-8' },
  { title: 'Grade 9 Fees', url: '/fees/grade-9' },
];

export default function Fees() {
  return (
    <section className="bg-[#dfecfaff] text-gray-900">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-start">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#de9642] mb-4">
          Pioneer Girls Junior Academy Fees
        </h1>
        <div className="my-4 h-1 w-32  bg-white"></div>

        <p className="text-xl font-medium text-gray-900 mt-5">
          ​We at Pioneer Girls Junior Academy understand how difficult it is for a family to make the best decision on your child's education.

          Our focus is impact and value for money fees to secure your child's dreams. 
        </p>
      </div>
      <div className="w-full overflow-hidden h-[60vh] relative bg-fixed ">
        <div className='absolute inset-0 bg-black opacity-30'/>
        <img
          src="/feespage.webp"
          alt="Fees Banner"
          className="object-contain w-full h-full"
          style={{ backgroundColor: '#f6f6f6' }}
        />
      </div>

      {/* Cards */}
      <div className="md:max-w-2xl mx-auto px-2 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {feesData.map((fee, index) => (
          <Link
            key={index}
            to={fee.url}
            className="block bg-[#de9642] hover:bg-yellow-700 transition rounded-md p-2 shadow-md text-center font-bold text-lg text-white hover:shadow-lg"
          >
            {fee.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
