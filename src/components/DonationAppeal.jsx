 
import { Link } from "react-router-dom";

const DonationAppeal = () => {
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Donation Appeal</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line" style={{fontFamily:"Poppins"}}>
            Our students are often greatly impoverished and come from family background where there is no real knowledge of Deen.  Jamia Hafsa-Lil-Banat has an annual expenditure of around approximate £ ******** GBP i.e. * to * Million Rand (i.e.) INR ** to **. This funds the cost of education, clothing, feeding, accommodation, Medical also and transport for over 500 students who cannot afford to pay for their courses.

As you can see,  Jamia Hafsa-Lil-Banat is a large institute with many students, has no regular income and depends solely upon the mercy of Almighty Allah and the generous donations of Muslim brothers and sisters.

 Jamia Hafsa-Lil-Banat is an institute with a substantial commitment to safeguarding and protecting the future of generations of Muslims to come through the educating of mothers of future, ensuring that Islam flourishes for an eternity and that the darkness of ignorance is banished from all Muslims homes.

This is a noble aspiration, and one for which Allah Subhanahu Wa Ta’ala has promised both success and great reward.

I hope that you will recognize this unique appeal of  Jamia Hafsa-Lil-Banat, the significant scale of its noble work and participate in supporting it in whatever way you can.

May Allah Subhanahu Wa Ta’ala reward your generosity and reward your support in this life and the Hereafter….. Ameen.
          </p>
          <Link
            to="/bankdetails"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow"
          style={{fontFamily:"Poppins"}}>
            Click: Bank Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationAppeal;