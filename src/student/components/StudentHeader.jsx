import { useNavigate } from "react-router-dom";

export default function StudentHeader({ setSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow px-4 md:px-6 py-4 mt-4 flex items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        
        {/* ☰ Menu Button (mobile only) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden px-3 py-2 bg-blue-600 text-white rounded"
        >
          ☰
        </button>

        {/* Title */}
        <h1 className="text-lg md:text-xl font-bold text-blue-700">
          Admission Section
        </h1>

      </div>

      {/* RIGHT SIDE (optional future use) */}
      <div className="flex items-center gap-3">
        {/* Future: Profile / Logout */}
      </div>

    </header>
  );
}