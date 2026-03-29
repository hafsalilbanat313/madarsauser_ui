import { useNavigate } from "react-router-dom";

const NewBadge = () => {
  return (
    <div className="flex flex-col items-center mr-2">
      <img
        src="/newgiff.gif"
        alt="new"
        className="w-8 h-4"
      />
    </div>
  );
};

const Welcome = () => {
  const navigate = useNavigate();

  // ✅ CATEGORY BASED PDF OPEN
  const openPDF = async (category) => {
    const confirmDownload = window.confirm(
      "Are you sure you want to download/view this PDF?"
    );

    if (!confirmDownload) return;

    try {
      const url = `https://madarsa-backend-pro.onrender.com/api/notices/category/${category}`;

      // 🔍 check API first
      const res = await fetch(url);

      if (!res.ok) {
        alert("No content found!");
        return;
      }

      // ✅ open PDF
      window.open(url, "_blank");

    } catch (err) {
      alert("No content found!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10 px-4">

      {/* Page Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-black" style={{ fontFamily: "Cinzel, serif !important "}} >
          Admission and Examination
        </h2>
        <div className="w-[43%] sm:w-96 h-1 bg-blue-600 mx-auto mt-2"></div>
      </div>

      {/* MOHTAMIM MESSAGE SECTION */}
      <div className="max-w-7xl mx-auto mb-8 border border-gray-300 bg-white p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src="/mylogowoutbg.png"
            alt="Mohtamim"
            className="w-32 h-32 object-cover "
          />

          <div>
            <h3 className="text-xl font-bold text-black mb-2" style={{fontFamily:"Poppins"}}>
              Founder's Message
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed" style={{fontFamily:"Poppins"}}>
              “Education is the foundation of progress and enlightenment.
              True education develops intellect, builds character, and nurtures
              discipline along with moral values. When knowledge is guided by
              ethics and faith, it strengthens individuals and society.”
            </p>

            <p className="mt-3 font-semibold text-black">
              — Hazrat Qari Waseem Sahab
            </p>
            <p className="text-sm text-gray-600">
              Founder & Mohtamim
            </p>
          </div>

        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Featured */}
          <div className="border border-gray-300 bg-white">
            <div className="bg-blue-600 text-white font-semibold px-4 py-2">
              Featured
            </div>
            <ul className="p-4 text-sm space-y-3">
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("FEATURED")}>
                <NewBadge />
                <span>► Syllabus of Admission test</span>
              </li>
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("FEATURED")}>
                <NewBadge />
                <span>► Admission Notices</span>
              </li>
            </ul>
          </div>

          {/* Admission */}
          <div className="border border-gray-300 bg-white">
            <div className="bg-blue-600 text-white font-semibold px-4 py-2">
              Admission
            </div>
            <ul className="p-4 text-sm space-y-3">
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("ADMISSION_LIST")}>
                <NewBadge />
                <span>► Admission List (Selected)</span>
              </li>
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("ADMISSION_RESULT")}>
                <NewBadge />
                <span>► Result of Admission Test</span>
              </li>
            </ul>
          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="lg:col-span-2 border border-gray-300 bg-white">
          <div className="px-4 py-3 border-b border-gray-300">
            <h3 className="text-xl font-bold text-center text-black" style={{fontFamily:"Poppins"}}>
              NEWS & NOTIFICATION
            </h3>
            <div className="w-full h-0.5 bg-blue-600 mt-2"></div>
          </div>

          <div className="p-4 space-y-4 text-sm">

            <div className="flex items-start cursor-pointer"
                 onClick={() => openPDF("NEWS")}>
              <NewBadge />
              <span className="text-gray-600 mr-4">18-05-2024</span>
              <span className="text-blue-700 hover:underline cursor-pointer">
                Corrigendum of Eligibility Criteria
              </span>
            </div>

            <div className="flex items-start cursor-pointer"
                 onClick={() => openPDF("NEWS")}>
              <NewBadge />
              <span className="text-gray-600 mr-4">26-03-2024</span>
              <span className="text-blue-700 hover:underline cursor-pointer">
                Faculty Redressal Form for Semester
              </span>
            </div>

            <div className="flex items-start cursor-pointer"
                 onClick={() => openPDF("NEWS")}>
              <NewBadge />
              <span className="text-gray-600 mr-4">10-02-2024</span>
              <span className="text-blue-700 hover:underline cursor-pointer">
                General Notice regarding Holidays
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* Examinations */}
          <div className="border border-gray-300 bg-white">
            <div className="bg-blue-600 text-white font-semibold px-4 py-2">
              Examinations
            </div>
            <ul className="p-4 text-sm space-y-3">
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("EXAM_CLASS")}>
                <NewBadge />
                <span>► Class examination info</span>
              </li>
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("EXAM_INTERNAL")}>
                <NewBadge />
                <span>► Internal exam result</span>
              </li>
            </ul>
          </div>

          {/* Notices */}
          <div className="border border-gray-300 bg-white">
            <div className="bg-blue-600 text-white font-semibold px-4 py-2">
              Notices and Updates
            </div>
            <ul className="p-4 text-sm space-y-3">
              <li className="flex items-start cursor-pointer"
                  onClick={() => openPDF("NOTICE_GENERAL")}>
                <NewBadge />
                <span>► General notices like holiday etc</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Welcome;
