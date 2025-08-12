import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaEnvelope, FaBook, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa';

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

const StudentAccess: React.FC = () => {
  return (
    <div className="font-sans">
      <section className="bg-slate-200 shadow-md w-full">
            <div>
                <img
                src="/studentaccess.webp"
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
              <AccessButton icon={FaLaptopCode} text="MOODLE E-LEARNING" to="https://elearning.pioneergirlsschool.co.ke/login/index.php" />
              <AccessButton icon={FaEnvelope} text="STUDENT MAIL" to="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&amp;redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&amp;response_type=code%20id_token&amp;scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&amp;response_mode=form_post&amp;nonce=638606247336442260.OTAyMTRhZWQtOWZiZC00YzdmLWI0OWYtOWMxNjc0NTE1YmVkNTBkM2I0NTgtMjkyOC00ZjE3LThhZTctZTFmYzc1NjFjYjc3&amp;ui_locales=en-US&amp;mkt=en-US&amp;client-request-id=3e33b67d-f605-41fa-98ae-bbf925caabf0&amp;state=zvJGgAGmvl5tfM7yI2VPW5xNj1SXxw9RqfjUmUx8dFnjs_FmUjJWS_COJathaKP7KIgsoIbpUx_MM0q8hN29QZy04V6iM9--IqAg1UCLT8jxe5NEHt65mK6s7sJcgZJeAQWePcHUxJbwFdlJGWfiqALwI8552d-aEVlLQANmmJ3i87THmzHoDfAH34MMNwdZJDJiV_lIQOBF_q6aAYMsUz1uoQ5ODYoxMkXIcsoKBvTrSyo6nW6PiZmED58nLO6UvU4cROLCNlEjR8No8O1y8w&amp;x-client-SKU=ID_NET8_0&amp;x-client-ver=7.5.1.0" />
              <AccessButton icon={FaBook} text="ONLINE LIBRARY" to="https://library.pioneergirlsschool.co.ke/" />
            </div>

            {/* Separator Line */}
            <div className="h-1 bg-white w-full mx-auto my-12"></div>

            {/* Bottom row of buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <AccessButton icon={FaUserFriends} text="CLUBS & SPORTS REGISTRATION" to="/student-access" />
              <AccessButton icon={FaChalkboardTeacher} text="ONLINE CLASS ACCESS" to="https://teams.microsoft.com/l/team/19%3AdjcOjPLAUrxcRHA4kcbg9XYjbeYfQ6N1kKQWQ47pgeg1%40thread.tacv2/conversations?groupId=9bef5088-e1fc-4f1d-89db-c64c22834818&amp;tenantId=bd7222c7-0cef-4bc5-9e9e-d5f8b5bbb1e2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default StudentAccess;