import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLaptopCode, FaBook, FaChalkboardTeacher, FaUserCog, FaUserMd } from 'react-icons/fa';

// A single button component for reusability with proper typing
const AccessButton: React.FC<{ text: string, to: string, icon: React.ElementType }> = ({ text, to, icon: Icon }) => (
  <Link
    to={to}
    role="button"
    className="flex items-center justify-center bg-[#de9642] text-slate-800 hover:bg-slate-300 font-bold uppercase text-sm px-6 py-8 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out text-center"
  >
    <Icon className="mr-2 h-5 w-5" />
    {text}
  </Link>
);

const StaffAccess: React.FC = () => {
  return (
    <div className="font-sans bg-gray-200">
      <section className="bg-slate-200 shadow-md w-full">
            <div>
                <img
                src="/staffaccess.webp"
                alt="staff only"
                className="w-full object-cover h-[500px]"
                />
            </div>
        </section>


      {/* Main Content - Navigation Buttons */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Top row of buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              <AccessButton icon={FaEnvelope} text="Staff Email Access" to='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&amp;redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&amp;response_type=code%20id_token&amp;scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&amp;response_mode=form_post&amp;nonce=638606247336442260.OTAyMTRhZWQtOWZiZC00YzdmLWI0OWYtOWMxNjc0NTE1YmVkNTBkM2I0NTgtMjkyOC00ZjE3LThhZTctZTFmYzc1NjFjYjc3&amp;ui_locales=en-US&amp;mkt=en-US&amp;client-request-id=3e33b67d-f605-41fa-98ae-bbf925caabf0&amp;state=zvJGgAGmvl5tfM7yI2VPW5xNj1SXxw9RqfjUmUx8dFnjs_FmUjJWS_COJathaKP7KIgsoIbpUx_MM0q8hN29QZy04V6iM9--IqAg1UCLT8jxe5NEHt65mK6s7sJcgZJeAQWePcHUxJbwFdlJGWfiqALwI8552d-aEVlLQANmmJ3i87THmzHoDfAH34MMNwdZJDJiV_lIQOBF_q6aAYMsUz1uoQ5ODYoxMkXIcsoKBvTrSyo6nW6PiZmED58nLO6UvU4cROLCNlEjR8No8O1y8w&amp;x-client-SKU=ID_NET8_0&amp;x-client-ver=7.5.1.0' />
              <AccessButton icon={FaLaptopCode} text="Staff E-Learning Access" to='https://elearning.pioneergirlsschool.co.ke/login/index.php' />
              <AccessButton icon={FaBook} text="Staff Online Library" to='https://library.pioneergirlsschool.co.ke/' />
            </div>

            {/* Separator Line */}
            <div className="h-1 bg-white w-full mx-auto my-12"></div>

            {/* Bottom row of buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AccessButton icon={FaChalkboardTeacher} text="Staff Online Classes" to='https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&amp;scope=openId%20profile%20openid%20offline_access&amp;redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fv2&amp;client-request-id=9552b44f-e945-4481-9ade-8739353d65ff&amp;response_mode=fragment&amp;response_type=code&amp;x-client-SKU=msal.js.browser&amp;x-client-VER=3.7.1&amp;client_info=1&amp;code_challenge=PZUfxMj2bPpyxaQ_-8Km5uPK8uSAcSO9wAGFqoIW8b4&amp;code_challenge_method=S256&amp;nonce=af23be6a-9042-4ab3-b924-bd3a40e34076&amp;state=eyJpZCI6ImVjYjliYzg1LTc1ZGItNDg3Mi05MWE0LThhN2ViZTQzMmM3NiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D' />
              <AccessButton icon={FaUserCog} text="Staff Portal Access" to='https://managehumanresourcecapital.pioneergroupofschools.co.ke/'/>
              <AccessButton icon={FaUserMd} text="Clinic Staff Access" to='https://www.manageclinic.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffAccess;