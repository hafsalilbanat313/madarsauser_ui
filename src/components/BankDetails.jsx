 
import { Link } from "react-router-dom";

const BankDetails = () => {
  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[250px_1fr] gap-6">
        {/* Sidebar Navigation */}
        <div className="bg-white/60 backdrop-blur-md p-4 rounded-lg shadow border border-white/30">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Donation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/donation-appeal" className="text-blue-600 hover:underline">
                Donation Appeal
              </Link>
            </li>
            <li>
              <Link to="/student-sponsorship" className="text-blue-600 hover:underline">
                Student Sponsorship
              </Link>
            </li>
            <li>
              <Link to="/bankdetails" className="text-blue-600 font-semibold underline">
                Bank Details
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-md border border-white/30">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Bank Details</h2>
          <p className="text-gray-800 mb-6">
            Please make cheques payable to: <span className="font-semibold">HAFSALILBANAT</span>
          </p>

          <hr className="border-gray-400 mb-6" />

          <h3 className="text-lg font-bold text-gray-800 mb-2">LOCAL BANK ACCOUNTS DETAILS</h3>

          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <p>
              <strong>TYPE OF ACCOUNT:</strong> SAVING
            </p>
            <p>
              <strong>Account Name:</strong> HAFSALIL BANAT
            </p>
            <p>
              <strong>Bank Name:</strong> PUNJAB NATIONAL BANK
            </p>
            {/* <p>
              <strong>Bank Address:</strong> MOHAMMADPUR KHUDALIA,SIMBHAOLI,HAPUR,U.P 245207.
            </p> */}
            <p>
              <strong>Account Number:</strong> 2042000100189834
            </p>
            <p>
              <strong>IFSC CODE:</strong> PUNB0204200
            </p>
          </div>

          <hr className="mt-6 border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
