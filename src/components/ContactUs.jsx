import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-12 px-4 bg-gradient-to-br from-white to-blue-50 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-8 shadow-xl mb-10">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">📞 Contact Us</h2>

        {/* India Address */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📍 JAMIA HAFSA-LIL-BANAT ,RATUPURA</h3>
          <p className="text-sm text-gray-800 leading-relaxed">
            At & Po. SIMBHAOLI, <br />
            TA. & Dist. GARHMUKTESHWAR ,HAPUR, <br />
            UTTAR PRADESH - 245207, India. <br />
            🌐 Website: <a href="http://www.jhlb.com" className="text-blue-700 underline">www.jhlb.com</a><br />
            📧 Emails: <a href="mailto:account@jamiahafsalilbanat.com" className="text-blue-700">account@jamiahafsalilbanat.com</a>,{" "}
            <a href="mailto:jamiahafsalilbanat@gmail.com" className="text-blue-700">jamiahafsalilbanat@gmail.com</a><br />
            📞 Phone: +91 9412345404, +91 9639310847
          </p>
        </div>

        {/* Contacts */}
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
          <div className="bg-white/50 border border-blue-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <h4 className="font-semibold text-blue-800 mb-1">Qari Waseem Akram Sahab</h4>
            <p>
              Hafsa lil banat , Ratupura<br />
              Simbhaoli<br />
              📞 M: +91 9639310847
            </p>
          </div>
          <div className="bg-white/50 border border-blue-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <h4 className="font-semibold text-blue-800 mb-1">Mohd Mursaleen</h4>
            <p>
              Ratupura<br />
              Hapur, U.P 245207 <br />
              📞 M: +91 9756796893
            </p>
          </div>
          <div className="bg-white/50 border border-blue-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <h4 className="font-semibold text-blue-800 mb-1">Mohd Afsar Ali</h4>
            <p>
              Near New Masjid, Ratupura<br />
              Garhmukteshwar<br />
              📱 M: +91 9624382228<br />
              📧 <a href="mailto:mohdafsar@gmail.com" className="text-blue-700">mohdafsar@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl w-full bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-md mb-10">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">🗺️ Our Location on Map</h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1554.215061189884!2d77.99197703950854!3d28.741450226828817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smadarsa%20hafsa%20lil%20banat%20ratupura!5e0!3m2!1sen!2sin!4v1750604714228!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
            title="Jamia Hafsa Lil Banat Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
