 
import { Link } from "react-router-dom";

const StudentSponsorship = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 sm:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        {/* Side Navigation Card */}
        <div className="bg-white/40 backdrop-blur-md border border-white/30 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4 text-blue-800"style={{fontFamily:"Poppins"}}>Donation Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/donation-appeal" className="text-blue-600 hover:underline"style={{fontFamily:"Poppins"}}>
                ➤ Donation Appeal
              </Link>
            </li>
            <li>
              <Link to="/student-sponsorship" className="text-blue-600 hover:underline"style={{fontFamily:"Poppins"}}>
                ➤ Student Sponsorship
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-white/60 backdrop-blur-md border border-white/30 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4"style={{fontFamily:"Poppins"}}>Student Sponsorship Programs</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line"style={{fontFamily:"Poppins"}}>
            As you can see,  Jamia Hafsa-Lil-Banat is a large institute with many students, has no regular income and depends solely upon the mercy of Almighty Allah and the generous donations of Muslim brothers and sisters.

This funds the cost of education, clothing, feeding, accommodation, Medical also and transport for students who cannot afford to pay for their courses.
          </p>
          <Link
            to="/donate"
            className="inline-block mb-6 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow"
          style={{fontFamily:"Poppins"}}>
            Ple. Click: Make a Donation
          </Link>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/80 backdrop-blur-md rounded shadow border border-white/30">
              <thead>
                <tr className="text-left text-sm text-white bg-blue-700">
                  <th className="p-3"style={{fontFamily:"Poppins"}}>PARTICULARS</th>
                  <th className="p-3"style={{fontFamily:"Poppins"}}>INR (Rs)</th>
                  <th className="p-3"style={{fontFamily:"Poppins"}}>GBP (£)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                <tr className="border-t border-white/20">
                  <td className="p-3"style={{fontFamily:"Poppins"}}>ANNUAL COST ONE STUDENT</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>17,000.00</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>190.00</td>
                </tr>
                <tr className="border-t border-white/20">
                  <td className="p-3"style={{fontFamily:"Poppins"}}>FULL COST ONE STUDENT AALIMAH COURSE</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>103,000.00</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>1,140.00</td>
                </tr>
                <tr className="border-t border-white/20">
                  <td className="p-3"style={{fontFamily:"Poppins"}}>ANNUAL SALARY OF ONE TEACHER</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>100,000.00</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>1,100.00</td>
                </tr>
                <tr className="border-t border-white/20">
                  <td className="p-3"style={{fontFamily:"Poppins"}}>ANNUAL COST ONE PART-TIME STUDENT</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>17,000.00</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>190.00</td>
                </tr>
                <tr className="border-t border-white/20">
                  <td className="p-3"style={{fontFamily:"Poppins"}}>FULL COST ONE PART-TIME AALIMAH COURSE</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>51,000.00</td>
                  <td className="p-3"style={{fontFamily:"Poppins"}}>570.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSponsorship;
