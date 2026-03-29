import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import HomeLayout from "./components/HomeLayout";
 
// Pages
import DonationAppeal from "./components/DonationAppeal";
import StudentSponsorship from "./components/StudentSponsorship";
import BankDetails from "./components/BankDetails";
import Courses from "./components/Courses";
import CraftSkills from "./components/CraftSkills";
import Facilities from "./components/Facilities";
import FuturePlans from "./components/FuturePlans";
import Inquiry from "./components/Inquiry";
import ContactUs from "./components/ContactUs";
import JamiaHafsaLilBanat from "./components/JamiaHafsaLilBanat";
import AboutUs from "./components/AboutUs";
import BoardOfTrustees from "./components/BoardOfTrustees";
import MessageFromMohatamim from "./components/MessageFromMohatamim";
import GuestsIjlasGallery from "./components/GuestsIjlasGallery";
import Establishment from "./components/Establishment";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { studentRoutes } from "./student/routes/studentRoutes";
// import AcademicHistory from "./oldstudents/AcademicHistory";
// import MarksGraphs from "./oldstudents/MarksGraphs";
// import StudentProfile from "./oldstudents/StudentProfile";
// import StudentDashboard from "./oldstudents/StudentDashboard";



function App() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ur,ar",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* ================= Main Layout ================= */}
        <Route element={<MainLayout />}>
          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Home */}
          <Route path="/home" element={<HomeLayout />} />

          {/* Pages */}
          <Route path="/jamiahafsalilbanat" element={<JamiaHafsaLilBanat />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/boardoftrustees" element={<BoardOfTrustees />} />
          <Route path="/messagefrommohatmim" element={<MessageFromMohatamim />} />
          <Route path="/donation-appeal" element={<DonationAppeal />} />
          <Route path="/student-sponsorship" element={<StudentSponsorship />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/craftskills" element={<CraftSkills />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/futureplans" element={<FuturePlans />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/guestsijlasgallery" element={<GuestsIjlasGallery />} />
          <Route path="/establishment" element={<Establishment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {studentRoutes}
          {/* <Route path="/student/academic-history" element={<AcademicHistory />} /> */}
          {/* <Route path="/student/marks" element={<MarksGraphs />} /> */}
          {/* <Route path="/student/profile" element={<StudentProfile />} /> */}
          {/* <Route path="/old/student/dashboard" element={<StudentDashboard />} /> */}


          {/* 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
