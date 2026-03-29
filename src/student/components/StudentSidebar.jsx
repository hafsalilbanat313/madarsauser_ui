import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaFileAlt,
  FaCheckCircle,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

export default function StudentSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("studentToken");
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", path: "/student/dashboard", icon: <FaHome /> },
    { name: "Profile", path: "/student/profile", icon: <FaUser /> },
    { name: "Admission Form", path: "/student/admission-form", icon: <FaFileAlt /> },
    { name: "Submitted Form", path: "/student/submitted-form", icon: <FaCheckCircle /> },
    { name: "Results", path: "/student/results", icon: <FaChartBar /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">
      <div className="p-4 text-xl font-bold text-blue-700">
        Student Panel
      </div>

      <nav className="mt-4 space-y-1">
        {menu.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium transition
               ${
                 isActive
                   ? "bg-blue-100 text-blue-700 border-r-4 border-blue-700"
                   : "text-gray-600 hover:bg-gray-100"
               }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

        {/* Logout Button Separate */}
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </nav>
    </aside>
  );
}