import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-900 to-blue-700 text-white px-4 sm:px-6 md:px-10 py-10 rounded-t-3xl shadow-inner">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-white/20 pb-1">
            About Jamia
          </h4>
          <ul className="space-y-2 pl-1">
            <li><a href="/jamiahafsalilbanat" className="hover:underline">Jamia Hafsa lil Banat</a></li>
            <li><a href="/boardoftrustees" className="hover:underline">The Jamia Trust</a></li>
            <li><a href="/boardoftrustees" className="hover:underline">Board of Trustees</a></li>
            <li><a href="/messagefrommohatmim" className="hover:underline">Message from Mohatamim</a></li>
          </ul>
        </div>

        {/* Academics Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-white/20 pb-1">
            Academics
          </h4>
          <ul className="space-y-2 pl-1">
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/craftskills" className="hover:underline">Craft Skills</a></li>
            <li><a href="/futureplans" className="hover:underline">Future Plans</a></li>
            <li><a href="/student-sponsorship" className="hover:underline">Student Sponsorship</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-white/20 pb-1">
            Support
          </h4>
          <ul className="space-y-2 pl-1">
            <li><a href="/donation-appeal" className="hover:underline">Donation Appeal</a></li>
            <li><a href="/student-sponsorship" className="hover:underline">Student Sponsorship</a></li>
            <li><a href="/bankdetails" className="hover:underline">Bank Details</a></li>
            <li><a href="/inquiry" className="hover:underline">Inquiry</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-white/20 pb-1">
            Contact Us
          </h4>

          <div className="space-y-3 text-sm pl-1">
            
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-white/80" />
              <span>Near New Masjid, Ratupura, Hapur U.P</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white/80" />
              <span>+91 9412345404</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white/80" />
              <span>+91 9756796893</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white/80" />
              <span>hafsalilbanat313@gmail.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs text-white/70 px-2">
        © {new Date().getFullYear()} Jamia Hafsa lil Banat. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;