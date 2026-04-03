import { User, FileText, CheckSquare, Trophy, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const cards = [
  { 
    title: "My Profile", 
    desc: "View & update personal details",
    icon: User,
    path: "/student/profile",   // 👈 add this
    gradient: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    title: "Admission Form", 
    desc: "Fill your admission form",
    icon: FileText,
    path: "/student/admission-form",
    gradient: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  { 
    title: "Submitted Form", 
    desc: "Check submitted admission form",
    icon: CheckSquare,
    path: "/student/submitted-form",
    gradient: "from-green-500 to-emerald-500",
    bgLight: "bg-green-50",
    iconColor: "text-green-600"
  },
  { 
    title: "Results", 
    desc: "View exam & admission results",
    icon: Trophy,
    path: "/student/results",
    gradient: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50",
    iconColor: "text-orange-600"
  },
];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2" style={{fontFamily:"Poppins"}}>
            Student Dashboard
          </h2>
          <p className="text-gray-600 font"style={{fontFamily:"Poppins"}}>Welcome back! Here's what you can do today.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
             <div
  key={i}
  onClick={() => navigate(c.path)}   // 👈 YE LINE ADD KARNI HAI
  style={{fontFamily:"Poppins"}}
  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
>
                {/* Icon Container */}
                <div className={`${c.bgLight} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${c.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {c.desc}
                </p>

                {/* Action Arrow */}
                <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                  <span className="mr-2">View</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats Section (Optional) */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4"style={{fontFamily:"Poppins"}}>Quick Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"style={{fontFamily:"Poppins"}}>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm text-gray-600 mb-1"style={{fontFamily:"Poppins"}}>Application Status</p>
              <p className="text-2xl font-bold text-blue-600"style={{fontFamily:"Poppins"}}>In Progress</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm text-gray-600 mb-1"style={{fontFamily:"Poppins"}}>Forms Completed</p>
              <p className="text-2xl font-bold text-green-600">2/4</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
              <p className="text-sm text-gray-600 mb-1"style={{fontFamily:"Poppins"}}>Documents Uploaded</p>
              <p className="text-2xl font-bold text-purple-600">5/8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}