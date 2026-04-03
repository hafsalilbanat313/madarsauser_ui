import { Route } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import  StudentDashboard  from "../pages/Dashboard";
import  StudentProfile  from "../pages/Profile";
 import  AdmissionForm  from "../pages/AdmissionForm";
import  SubmittedForm  from "../pages/SubmittedForm";
import  StudentResults  from "../pages/Results";
// import  StudentNotices  from "../pages/Notices";
import { StudentProtectedRoute } from "../../utils/StudentProtectedRoute";
import StudentFee from "../pages/StudentFee";
 

export const studentRoutes = (
  <Route
    path="/student"
    element={
      <StudentProtectedRoute>
        <StudentLayout />
      </StudentProtectedRoute>
    }
  >
    <Route path="dashboard" element={<StudentDashboard />} />
    <Route path="profile" element={<StudentProfile />} />
    <Route path="admission-form" element={<AdmissionForm />} />
    <Route path="submitted-form" element={<SubmittedForm />} />
    <Route path="results" element={<StudentResults />} />
    <Route path="/student/fee" element={<StudentFee />} />
    {/* <Route path="notices" element={<StudentNotices />} /> */}
  </Route>
);
