import axios from "axios";
import { CheckCircle, Download, FileText } from "lucide-react";

export default function SubmittedForm() {
  const downloadPDF = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:3000/api/student-form/download-pdf",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "AdmissionForm.pdf";
      link.click();
    } catch (err) {
      console.error(err);
      alert("PDF download failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-green-400 p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Submission Successful!
          </h2>
          <p className="text-blue-50">
            Your admission form has been submitted
          </p>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div> */}
            {/* <p className="text-gray-600 leading-relaxed">
              Your application is now under review. You can download your
              admission form for your records using the button below.
            </p> */}
          </div>

          <button
            onClick={downloadPDF}
            className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Admission Form (PDF)
          </button>

          {/* <p className="text-sm text-gray-500 mt-6">
            We'll notify you via email about the next steps
          </p> */}
        </div>

        {/* Footer decoration */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
      </div>
    </div>
  );
}