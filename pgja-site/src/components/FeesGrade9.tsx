import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CreditCard, AlertCircle, Mail, CheckCircle, XCircle, Phone } from 'lucide-react';

interface TermFeeCardProps {
  term: string;
  amount: string;
  isAnnual?: boolean;
}

interface OneOffChargeProps {
  title: string;
  amount?: string;
  isFree?: boolean;
}

const TermFeeCard: React.FC<TermFeeCardProps> = ({ term, amount, isAnnual = false }) => (
  <div className={`rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 ${
    isAnnual 
      ? 'bg-[#de9642] text-white' 
      : 'bg-gray-100 border border-gray-200'
  }`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className={`text-lg font-bold ${isAnnual ? 'text-white' : 'text-gray-800'}`}>
        {term}
      </h3>
      <GraduationCap className={`w-6 h-6 ${isAnnual ? 'text-white' : 'text-[#de9642]'}`} />
    </div>
    <div className="text-right">
      <span className={`text-2xl font-bold ${isAnnual ? 'text-white' : 'text-[#de9642]'}`}>
        {amount}
      </span>
    </div>
  </div>
);

const OneOffChargeCard: React.FC<OneOffChargeProps> = ({ title, amount, isFree = false }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        <div className="flex items-center">
          {isFree ? (
            <>
              <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-[#de9642] font-semibold">FREE</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 text-[#de9642] mr-2" />
              <span className="text-xl font-bold text-gray-800">{amount}</span>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

const PaymentMethodCard: React.FC<{ method: string; accepted: boolean }> = ({ method, accepted }) => (
  <div className={`rounded-lg p-4 border-2 ${
    accepted 
      ? 'border-yellow-500 bg-orange-50' 
      : 'border-slate-200 bg-slate-50'
  }`}>
    <div className="flex items-center">
      {accepted ? (
        <CheckCircle className="w-5 h-5 text-yellow-700 mr-3" />
      ) : (
        <XCircle className="w-5 h-5 text-orange-500 mr-3" />
      )}
      <span className={`font-medium ${
        accepted ? 'text-slate-800' : 'text-orange-800'
      }`}>
        {method}
      </span>
    </div>
  </div>
);

export default function FeesGrade9() {
  const termFees = [
    { term: "TERM 1", amount: "KES 105,200" },
    { term: "TERM 2", amount: "KES 105,200" },
    { term: "TERM 3", amount: "KES 105,200" }
  ];

  const oneOffCharges = [
    { title: "Non-refundable Commitment Fee (deductible from total fees)", amount: "KES 20,000" },
    { title: "No extra charge for uniform, bedding and textbooks", },
    { title: "Free transport to and from Nyanyuki, Mombasa, and Embu", isFree: true }
  ];

  const paymentMethods = [
    { method: "Pay Bill (M-Pesa)", accepted: true },
    { method: "Banker's Cheque", accepted: true },
    { method: "Cash", accepted: false },
    { method: "Personal Cheques", accepted: false },
    { method: "Post-dated Cheques", accepted: false }
  ];

  return (
    <section className="min-h-screen bg-[#dfecfaff]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              GRADE 9 FEES
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-900">
              AT PIONEER GIRLS JUNIOR ACADEMY, THERE ARE NO HIDDEN FEES AND CHARGES
            </p>
            
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Termly Fees Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Termly Fees Structure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {termFees.map((fee, idx) => (
              <TermFeeCard
                key={idx}
                term={fee.term}
                amount={fee.amount}
              />
            ))}
            <TermFeeCard
              term="ANNUAL TOTAL"
              amount="KES 315,600"
              isAnnual={true}
            />
          </div>
        </div>

        {/* One-off Charges Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              New Students Only
            </h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneOffCharges.map((charge, idx) => (
                <OneOffChargeCard
                  key={idx}
                  title={charge.title}
                  amount={charge.amount}
                  isFree={charge.isFree}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Payment Methods
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paymentMethods.map((method, idx) => (
                <PaymentMethodCard
                  key={idx}
                  method={method.method}
                  accepted={method.accepted}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-900 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Terms & Conditions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-[#de9642] mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-500 text-lg">
                  Money paid is <strong className="text-slate-600">not refundable or transferable</strong>
                </p>
              </div>
              
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-[#de9642] mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-500 text-lg">
                  All fees should be paid to <strong className="text-slate-600">Pioneer Girls Junior Academy accounts only</strong>
                </p>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-[#de9642] mr-3" />
                <h3 className="text-xl font-semibold text-white">Need Help?</h3>
              </div>
              <p className="text-slate-200 mb-3">
                For clarification, contact our finance team:
              </p>
              <a 
                href="tel:+254 20 5038107"
                className="inline-flex items-center px-4 py-2 bg-[#de9642] text-slate-900 rounded-lg font-semibold hover:bg-yellow-700 transition-colors mr-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                 Call
              </a>
              <a 
                href="mailto:finance.enquiries@pioneergirlsjunioracademy.co.ke"
                className="inline-flex items-center px-4 py-2 bg-[#de9642] text-slate-900 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-12 text-center font-serif">
          <Link
            to={'/discover-fees/grade-7'}
            className="bg-[#de9642] hover:bg-yellow-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Explore Grade 7 Fees
          </Link>
        </div>
      </div>
    </section>
  );
}