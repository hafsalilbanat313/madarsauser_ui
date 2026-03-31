import { Link } from "react-router-dom";

const BoardOfTrustees = () => {
  const navLinks = [
    { name: "Jamia Banat Manubar", path: "/jamiahbanatmanubar" },
    { name: "About Us", path: "/aboutus" },
    { name: "The Jamia Trust", path: "/jamiahtrust" },
    { name: "Board of Trustees", path: "/boardoftrustees" },
    { name: "Message From Mohtamim", path: "/mohatmeem" },
    { name: "Establishment of Jamia", path: "/establishment" },
    { name: "Important Contacts", path: "/contacts" },
    { name: "Guests at Jamia banat Ratupura (HPU)", path: "/guests" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full bg-white/30 backdrop-blur-md rounded-xl shadow border border-white/40 p-4 sticky top-28 h-fit">
          <h3 className="text-lg font-bold text-blue-900 mb-4">📌 Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="block px-4 py-2 rounded hover:bg-blue-100 text-blue-800 font-medium transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-xl shadow border border-white/40 p-6 sm:p-8">
          {/* Founder */}
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Founder</h2>
          <div className="bg-white/70 rounded-lg shadow p-4 text-center text-blue-800 font-semibold text-lg mb-8">
            HAZRAT QARI WASEEM QASMI (RATUPURA)
          </div>

          {/* Trustees */}
          <h3 className="text-xl font-bold text-blue-900 mb-4">Majlis-e-Shoora (Board of Trustees)</h3>
          <div className="overflow-x-auto rounded-lg shadow mb-10">
            <table className="min-w-full bg-white/60 backdrop-blur-md border border-white/40">
              <thead>
                <tr className="bg-blue-100 text-blue-900 text-left text-sm">
                  <th className="py-2 px-4 border">Sr No</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Designation</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {[
  ["1", "XXXXX", "TRUSTEE"],
  ["2", "XXXXX", "TRUSTEE"],
  ["3", "XXXXX", "TRUSTEE"],
  ["4", "XXXXX", "TRUSTEE"],
  ["5", "XXXXX", "TRUSTEE"],
  ["6", "XXXXX", "TRUSTEE"],
  ["7", "XXXXX", "TRUSTEE"],
  ["8", "XXXXX", "TRUSTEE"],
]

.map(([sr, name, designation], index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td className="py-2 px-4 border">{sr}</td>
                    <td className="py-2 px-4 border">{name}</td>
                    <td className="py-2 px-4 border">{designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Administrator */}
          <h3 className="text-xl font-bold text-blue-900 mb-4">Administrator (Mohtamim)</h3>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white/60 backdrop-blur-md border border-white/40">
              <thead>
                <tr className="bg-blue-100 text-blue-900 text-left text-sm">
                  <th className="py-2 px-4 border">Sr No</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Designation</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr className="hover:bg-blue-50 transition duration-200">
                  <td className="py-2 px-4 border">1</td>
                  <td className="py-2 px-4 border">
                    HAZRAT QARI WASEEM QASMI (RATUPURA)
                  </td>
                  <td className="py-2 px-4 border">ADMINISTRATOR (MOHTMIM)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfTrustees;
