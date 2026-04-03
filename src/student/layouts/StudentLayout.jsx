import { Outlet } from "react-router-dom";
import { useState } from "react";
import StudentSidebar from "../components/StudentSidebar";
import StudentHeader from "../components/StudentHeader";

export default function StudentLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-white">
      
      {/* Sidebar */}
      <StudentSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Side */}
      <div className="flex flex-col flex-1 min-w-0">
        
        {/* Header */}
        <StudentHeader setSidebarOpen={setSidebarOpen} />

        {/* Content */}
        <main className="flex-1 w-full overflow-y-auto">
          <div className="min-h-full w-full p-4 md:p-6">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}