 
import { Link } from "react-router-dom";

const siblingLinks = [
  { label: " Jamia Hafsa-Lil-Banat", link: "/jamiahafsalilbanat" },
  { label: "About Us", link: "/aboutus" },
  { label: "The Jamiah Trust", link: "/jamiahtrust" },
  { label: "Board of Trustees", link: "/boardoftrustees" },
  { label: "Message From Mohtamim", link: "/mohatmeem" },
  { label: "Establishment of Jamiah", link: "/establishment" },
  { label: "Important Contacts", link: "/contacts" },
  { label: "Guest at Jamiah Manubar (Khususi Mehman)", link: "/guests" },
];

const JamiaHafsaLilBanat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Side Navigation Card */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-md p-4 sticky top-28">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">📚 Explore More</h3>
          <ul className="space-y-2">
            {siblingLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="block bg-white/60 rounded-lg px-3 py-2 text-blue-900 hover:bg-blue-100 hover:translate-x-1 transition-transform shadow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            JAMIA HAFSA-LIL-BANAT (RATUPURA)
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            is a highly established Institute for Girls based in UTTAR PRADESH, INDIA.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Through the Grace of Almighty Allah, Jamia Hafsa-Lil-Banat has provided a unique educational and pastoral service to the female Muslim Ummah since its establishment in 1993. The principal aim of  Jamia Hafsa-Lil-Banat is to provide an understanding of the Holy Qura'an and Ahadeeth to young female Muslims and guide them in developing a positive moral character. Thus enabling them to be exemplary mothers who can establish Deen in their homes and family.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
             Jamia Hafsa-Lil-Banat depends entirely upon the generous support of brother and sisters in Islam. Allah Subhanahu Wa ta'ala declares in the Holy Quraa'an:
          </p>
          <blockquote className="bg-yellow-100 border-l-4 border-yellow-500 italic px-4 py-3 rounded shadow text-sm md:text-base">
            "When a man dies, his deeds come to an end except for three: Sadaqah Jariyah (ongoing charity), knowledge that is benefited from, or a righteous child who prays for him."
 <strong>(Sahih Muslim 1631)</strong>
          </blockquote>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            Protecting against the fire of Hell is the responsibility discharged by  Jamia Hafsa-Lil-Banat by teaching young female Muslims the tenets of belief (Imaan), the principals of Sariah and the true practice of Islam.  Jamia Hafsa-Lil-Banat aims to protect female Muslims under its care from irreligious and immoral activities that determine personal character and blights communities. It also wishes to establish a moral purpose to young women who will become mothers that shape the spirituality of future generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JamiaHafsaLilBanat;
