

export default function TermsAndConditions() {
  return (
    <section className="bg-[#dfecfaff] text-gray-900 px-6 py-16 space-y-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 flex items-start">
          SCHOOL FEES TERMS & CONDITIONS
        </h1>
         <div className="mt-4 h-1 w-32  bg-slate-900 opacity-80"></div>
      </div>

      <div className="max-w-5xl mx-auto text-lg leading-relaxed space-y-6">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            School fees are annual and are billed on a termly basis. Fees should be paid in full on or before the first day of the term.
            <strong> (Cash payments are not accepted.)</strong>
          </li>
          <li>
            Additional fees for other school activities and holiday program activities will be billed separately.
          </li>
          <li>
            Fees once paid are <strong>non-refundable</strong>.
          </li>
          <li>
            Where any fee or part of a fee remains unpaid after the due date, the school reserves the right to:
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li>Demand payment in full of all fees outstanding to that date.</li>
              <li>Cease offering tuition services to the student.</li>
              <li>
                Terminate the enrollment of a student if the account remains outstanding after final reminders have been served.
              </li>
              <li>
                Charge legal fees and administrative costs incurred in the enforcement of payment.
              </li>
            </ul>
          </li>
          <li>
            The school reserves the right to adjust school fees at its discretion. Parents will be notified of any changes, and the new fees will take effect from the notified date.
          </li>
          <li>
            In the event of school closure due to an incident or force majeure, the school is not obliged to refund any fees.
          </li>
          <li>
            <strong>Fees Refund Policy:</strong>
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li>
                A full term’s written notice is required for withdrawal to be eligible for a refund.
              </li>
              <li>
                Fees are not refunded or waived due to absence, shortened terms, sickness, or disciplinary suspension.
              </li>
            </ul>
          </li>
          <li>
            For mid-term enrollments, parents are required to pay full admission fees as per the fee structure.
          </li>
          <li>
            Sibling discounts are available only during the period when siblings are enrolled concurrently. Parents must submit valid identification and birth certificates to the finance office.
          </li>
        </ol>
      </div>

      <p className="text-center italic text-blue-900 text-xl">
        Thank you for choosing Pioneer Girls Junior Academy!
      </p>
    </section>
  );
}
