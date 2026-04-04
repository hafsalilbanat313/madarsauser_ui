import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaFileAlt,
  FaCheckCircle,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

export default function StudentSidebar({ sidebarOpen, setSidebarOpen }) {
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
  { name: "Fee Payment", path: "/student/fee", icon: <FaFileAlt /> }, // 🔥 add
  { name: "Results", path: "/student/results", icon: <FaChartBar /> },
];  

  return (
    <>
      {/* ✅ Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        {/* 🔥 Close Button (mobile only) */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden absolute top-4 right-4 text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <div className="p-4 text-xl font-bold text-blue-700 border-b">
          Admission Informations
        </div>

        {/* Menu */}
        <nav className="mt-4 space-y-1">
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setSidebarOpen(false)} // 👈 mobile pe click ke baad band ho
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

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* ✅ Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[#00000000] bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}