import { Link } from "react-router-dom";

const AboutUs = () => {
  const navLinks = [
    { name: "Jamia Hafsa-Lil-Banat", path: "/jamiahafsalilbanat" },
    { name: "About Us", path: "/aboutus" },
    { name: "The Jamia Trust", path: "/jamiahtrust" },
    { name: "Board of Trustees", path: "/boardoftrustees" },
    { name: "Message From Mohtamim", path: "/mohatmeem" },
    { name: "Establishment of Jamia", path: "/establishment" },
    { name: "Important Contacts", path: "/contacts" },
    { name: "Guests at Jamia (Khususi Mehman)", path: "/guests" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10  sm:px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Navigation Panel */}
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
          <img
            src="https://plus.unsplash.com/premium_photo-1677523780036-1b1970552854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxpc2xhbWljJTIwYmFieSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
            alt="Jamia Institute"
            className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
          />
          <h2 className="text-2xl font-bold text-blue-900 mb-4">About Us</h2>

          <p className="text-gray-800 text-justify leading-relaxed mb-4">
            <strong>Jamia Hafsa-Lil-Banat (RATUPURA)</strong> is a highly established
            Institute for Girls based in Ratupura,Hapur-U.P.
          </p>

          <p className="text-gray-800 text-justify leading-relaxed mb-4">
            Through the Grace of Almighty Allah,Jamia Hafsa-Lil-Banat has provided a unique
            educational and pastoral service to the female Muslim Ummah since its establishment
            in  2018. The principal aim of Jamia Hafsa-Lil-Banat is to provide an understanding of the
            Holy Qur’an and Ahadeeth to young female Muslims and guide them in developing a
            positive moral character. Thus enabling them to be exemplary mothers who can establish
            Deen in their homes and family.
          </p>

          <p className="text-gray-800 text-justify leading-relaxed mb-4">
            Jamia Hafsa-Lil-Banat depends entirely upon the generous support of brothers and sisters
            in Islam. Allah Subhanahu Wa Ta'ala declares in the Holy Qur’an:
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 italic px-4 py-3 rounded mb-4 shadow">
           "My Lord! Increase me in knowledge."
<br />(Qur’an 20:114)
            <span className="text-sm">— </span>
          </div>

          <p className="text-gray-800 text-justify leading-relaxed">
            Protecting against the fire of Hell is the responsibility discharged by Jamia Hafsa-Lil-Banat
            by teaching young female Muslims the tenets of belief (Imaan), the principles of Shariah
            and the true practice of Islam.Jamia Hafsa-Lil-Banat aims to protect female Muslims under its
            care from irreligious and immoral activities that damage personal character and communities.
            It also aims to instill a moral purpose in young women who will become mothers that shape the
            spirituality of future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
