import { Link } from "react-router-dom";

const siblingLinks = [
  { label: "Jamiah Banat Manubar", path: "/jamiahbanatmanubar" },
  { label: "About Us", path: "/aboutus" },
  { label: "The Jamiah Trust", path: "/jamiahtrust" },
  { label: "Board of Trustees", path: "/boardoftrustees" },
  { label: "Message From Mohtamim", path: "/messagefrommohtamim" },
  { label: "Establishment of Jamiah", path: "/establishment" },
  { label: "Important Contacts", path: "/contacts" },
  { label: "Guest at Jamiah Manubar", path: "/guests" },
];

const MessageFromMohatamim = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar Links */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow p-4">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📚 Sections</h3>
            <ul className="space-y-2">
              {siblingLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-lg text-blue-800 hover:bg-blue-100 hover:text-blue-900 transition font-medium text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            📜 Message From Mohtamim
          </h2>

          <div className="text-gray-800 space-y-4 text-sm sm:text-base leading-relaxed">
            <p><strong>Dear Brothers and Sisters in Islam,</strong></p>
            <p><strong>Assalamu Alaikum Warahmatullahi Wabarakatuhu,</strong></p>
            <p>
              We would like to bring to your kind attention and consideration
              that currently there are 2100 female students studying and being
              looked after at  Jamia Hafsa-Lil-Banat.
            </p>
            <p>
              This Institute is making all strenuous efforts and is committed
              towards striving to achieve excellent academic progress and
              Islamic value and ethos, achieving exemplary outcomes for all
              these honourable and beloved daughters of the Muslim Ummah.
            </p>
            <p>
              Hence, in a relatively short period of 25 years since its
              inception, the educational and construction development and
              progress of  Jamia Hafsa-Lil-Banat is transparent to all.
            </p>
            <p>
               Jamia Hafsa-Lil-Banat’s loving, caring and spiritual environment has
              always been a source of comfort and tranquility to our daughters
              who study there.
            </p>
            <p>
              This is primarily due to the Mercy of Allah SWT, and also duas of
              the pious scholars, the sincerity of our staff, generous and
              selfless donations and cooperation of our donors and the hard
              work of all management and stakeholders. We praise Allah SWT for
              this.
            </p>
            <p>
              If we continue to receive this generous cooperation of all of you
              brothers and sisters, then Inshallah this Institute of yours,
              without a doubt, has a bright and progressive future.
            </p>
            <p>
              We sincerely and humbly appeal to you that you will continue to
              donate generously towards our institute and contribute in any way
              possible towards the lives of these daughters of the Muslim Ummah
              who are under our care.
            </p>
            <p>
              <strong>
                May Allah SWT reward you in abundance in this world and the
                hereafter. Ameen.
              </strong>
            </p>

            <div className="mt-6 text-right">
              <p className="font-semibold text-blue-800">
                Your brother in Islam,
              </p>
              <p className="font-semibold">Qari Waseem Akram Sahab</p>
              <p className="italic">Mohtamim, Jamia Hafsa-Lil-Banat</p>
              <p className="text-sm">
                At & Post-Simbhaoli, Dist-Hapur, U.P, India
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MessageFromMohatamim;
