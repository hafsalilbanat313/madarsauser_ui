import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";
import StudentHeader from "../components/StudentHeader";

export default function StudentLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <StudentHeader />

        {/* Content */}
        <main className="flex-1 w-full overflow-y-auto">
          {/* page container */}
          <div className="min-h-full w-full p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
