import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navigation';
import Page from './components/Pages.tsx'; 

import Home from './pages/Index.tsx';
import Pathways from './pages/Pathways.tsx'
import StudentLife from './pages/StudentLife.tsx'
import WhoWeAre from './pages/WhoWeAre.tsx';
import Talents from './pages/Talents.tsx';
import Location from './pages/Location.tsx';
import JoinUs from './pages/JoinUs.tsx';
import Fees from './pages/Fees.tsx';
import GetAccess from './pages/GetAccess.tsx';

import NotFound from './pages/NotFound.tsx';
import Enquire from './components/Enquire.tsx'
import TermsAndConditions from './pages/TermsAndConditions.tsx'; 
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import DisclaimerSection from './pages/Disclaimer.tsx';

import History from './components/History.tsx';
import Leadership from './components/Leadership.tsx';
import Golf from './components/Golf.tsx';
import StJohnAmbulance from './components/StJohnsAmbulance.tsx';
import NursingCare from './components/NursingCare.tsx'; 
import Chaplaincy from './components/Chaplaincy.tsx';
import JoinGrade9 from './components/JoinGrade9.tsx';
import PathwayDetails from './components/PathwayDetails.tsx';
import Aviator from './components/Aviator.tsx';
import Coder from './components/Coder.tsx';
import SeaFarer from './components/SeaFarer.tsx';
import SafetySecurity from './components/SafetySecurity.tsx';
import ArtsAndCulture from './components/ArtsAndCulture.tsx';
import GamesAndSports from './components/GamesAndSports.tsx';
import JoinGrade7 from './components/JoinGrade7.tsx';
import JoinGrade8 from './components/JoinGrade8.tsx';
import FeesGrade7 from './components/FeesGrade7.tsx';
import FeesGrade8 from './components/FeesGrade8.tsx';
import FeesGrade9 from './components/FeesGrade9.tsx';
import BoardingLife from './components/BoardingLife.tsx';
import StudentAccess from './components/StudentAccess.tsx';
import StaffAccess from './components/StaffAccess.tsx';
import CalendarOfEvents from './components/Calendar.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Page title="Home"><Home /></Page>} />
          <Route path="/discover-who-we-are" element={<Page title="Who We Are"><WhoWeAre /></Page>} />
          <Route path="/discover-pathways" element={<Page title="Pathways"><Pathways /></Page>} />
          <Route path="/discover-student-life" element={<Page title="Student Life"><StudentLife /></Page>} />
          <Route path="/discover-talents" element={<Page title="Talents"><Talents /></Page>} />
          <Route path="/join-us" element={<Page title="Join Us"><JoinUs /></Page>} />
          <Route path="/discover-fees" element={<Page title="Fees"><Fees /></Page>} />
          <Route path="/our-location" element={<Page title="Location"><Location /></Page>} />
          <Route path="/get-access" element={<Page title="Get Access"><GetAccess /></Page>} />
          <Route path="/privacy-policy" element={<Page title="Privacy Policy"><PrivacyPolicy /></Page>} />
          <Route path="/disclaimer" element={<Page title="Disclaimer"><DisclaimerSection /></Page>} />

          {/* Discover Who We Are Sub-routes */}
          <Route path="/discover-who-we-are/history" element={<Page title="History"><History /></Page>} />
          <Route path="/discover-who-we-are/leadership" element={<Page title="Leadership"><Leadership /></Page>} />

          {/* Pathways Sub-routes */}
          <Route path="/pathway-details" element={<Page title="Pathway Details"><PathwayDetails /></Page>} />
          <Route path="/junior-aviator" element={<Page title="Junior Aviator"><Aviator /></Page>} />
          <Route path="/junior-coder" element={<Page title="Junior Coder"><Coder/></Page>} />
          <Route path="/junior-seafarer" element={<Page title="Junior SeaFarer"><SeaFarer /></Page>} />
          
          {/* Student Life Sub-routes */}
          <Route path="/student-life/nursing-care" element={<Page title="Nursing Care"><NursingCare /></Page>} /> 
          <Route path="/student-life/boarding-life" element={<Page title="Boarding Life"><BoardingLife /></Page>} />
          <Route path="/student-life/chaplaincy" element={<Page title="Chaplaincy"><Chaplaincy /></Page>} />
          <Route path="/student-life/safety-security" element={<Page title="Safety & Security"><SafetySecurity /></Page>} />

          {/* Talents Sub-routes */}
          <Route path="/discover-talents/games-sports" element={<Page title="Games & Sports"><GamesAndSports /></Page>} />
          <Route path="/discover-talents/arts-culture" element={<Page title="Arts & Culture"><ArtsAndCulture /></Page>} />
          <Route path="/discover-talents/st-johns-ambulance" element={<Page title="St. John's Ambulance"><StJohnAmbulance /></Page>} />
          <Route path="/discover-talents/junior-golf" element={<Page title="Junior Golf"><Golf /></Page>} />
          
          {/* Join Us Sub-routes */}
          <Route path="/join-us/grade-7" element={<Page title="Join Grade 7"><JoinGrade7 /></Page>} />
          <Route path="/join-us/grade-8" element={<Page title="Join Grade 8"><JoinGrade8 /></Page>} />
          <Route path="/join-us/grade-9" element={<Page title="Join Grade 9"><JoinGrade9 /></Page>} />
          <Route path="/join-us/enquire" element={<Page title="Enquire"><Enquire /></Page>} />

          {/* Fees Sub-routes */}
          <Route path="/discover-fees/grade-7" element={<Page title="Fees Grade 7"><FeesGrade7 /></Page>} />
          <Route path="/discover-fees/grade-8" element={<Page title="Fees Grade 8"><FeesGrade8 /></Page>} />
          <Route path="/discover-fees/grade-9" element={<Page title="Fees Grade 9"><FeesGrade9/></Page>} /> 
          <Route path="/fees/terms-conditions" element={<Page title="Terms & Conditions"><TermsAndConditions/></Page>} />

          {/* Get Access Sub-items */}
          <Route path="/calendar" element={<Page title="Calendar of Events"><CalendarOfEvents /></Page>} />
          <Route path="/student-access" element={<Page title="Student Access"><StudentAccess /></Page>} /> 
          <Route path="/staff-access" element={<Page title="Staff Access"><StaffAccess /></Page>} />

          {/* 404 Not Found */}
          <Route path="*" element={<Page title="Page Not Found"><NotFound /></Page>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
