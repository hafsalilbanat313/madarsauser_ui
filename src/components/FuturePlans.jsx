 
import { useNavigate } from "react-router-dom";

const FuturePlans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 pt-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white/60 backdrop-blur-md border border-white/30 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Future Plans</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong>Educational Building Project – Update February 2020</strong><br/><br/>
            Jamia Hafsa Lil Banat serves the full educational, residential, clothing, medical and catering needs of almost 2100 students. It costs around £390,000 annually and relies solely on donations.<br/><br/>
            In 2018–19, 280 students completed the Aalima course, 55 completed Deeniyat, and 2 completed Hifz. Other lessons included IT, sewing, English, hygiene, and food preparation.<br/><br/>
            In 2019–20, 1210 applications were received for under 500 places from 15 Indian states. A new online admissions system was implemented.<br/><br/>
            Efficiency improvements since 2017 helped reduce costs and improve student services.<br/><br/>
            <strong>Project Rationale</strong><br/>
            One residential building is in serious disrepair. There is overcrowding with up to 25 students per room, leading to health concerns.<br/><br/>
            <strong>Plan:</strong><br/>
            - Demolish the old building and create an outdoor recreational area.<br/>
            - Construct a new education block with a central garden.<br/>
            - Convert current classrooms into bedrooms.<br/>
            - Build a secure perimeter wall.<br/><br/>
            <strong>Project Summary</strong><br/>
            - Work started: Nov 2018; Completion: Jan 2022<br/>
            - Capacity: 2400 students
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Facilities Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse bg-white/50 backdrop-blur-md rounded-lg">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="px-4 py-2 border">Facility</th>
                    <th className="px-4 py-2 border">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-4 py-2">Classrooms</td><td className="border px-4 py-2">82</td></tr>
                  <tr><td className="border px-4 py-2">Dor-e-Hadeeth Hall</td><td className="border px-4 py-2">1</td></tr>
                  <tr><td className="border px-4 py-2">Toilets</td><td className="border px-4 py-2">120 (6 blocks)</td></tr>
                  <tr><td className="border px-4 py-2">Wudhu Taps</td><td className="border px-4 py-2">120 (6 blocks)</td></tr>
                  <tr><td className="border px-4 py-2">Admin & Teacher Facilities</td><td className="border px-4 py-2">13</td></tr>
                  <tr><td className="border px-4 py-2">Library</td><td className="border px-4 py-2">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Cost Breakdown</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse bg-white/50 backdrop-blur-md rounded-lg">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="px-4 py-2 border">Facility</th>
                    <th className="px-4 py-2 border">Cost (INR)</th>
                    <th className="px-4 py-2 border">Cost (GBP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-4 py-2">Classrooms</td><td className="border px-4 py-2">800,000</td><td className="border px-4 py-2">9,000</td></tr>
                  <tr><td className="border px-4 py-2">Per Student (Classroom)</td><td className="border px-4 py-2">20,000</td><td className="border px-4 py-2">225</td></tr>
                  <tr><td className="border px-4 py-2">Dor-e-Hadeeth Hall</td><td className="border px-4 py-2">3,500,000</td><td className="border px-4 py-2">40,000</td></tr>
                  <tr><td className="border px-4 py-2">Wudhu Block</td><td className="border px-4 py-2">325,000</td><td className="border px-4 py-2">3,600</td></tr>
                  <tr><td className="border px-4 py-2">Library</td><td className="border px-4 py-2">3,100,000</td><td className="border px-4 py-2">35,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Project Progress</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base">
              <li>Land acquired and approved for construction</li>
              <li>Design finalized and contractor commissioned</li>
              <li>Du’aa done on 25 March 2018, work began Nov 2018</li>
              <li>Ground floor structure completed</li>
              <li>First floor work, wiring, plumbing and plastering scheduled for early 2020</li>
            </ul>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate("/bankdetails")}
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold shadow"
            >
              💳 Please Donate – Bank Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlans;
