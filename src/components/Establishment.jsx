import React from "react";

const Establishment = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          Our Establishment
        </h2>
        <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto">
          Since its founding in 2018, Jamia Hafsa lil Banat has been a beacon of hope, knowledge, and Islamic values for young girls. Our goal has always been clear — educate with faith, uplift with discipline.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text with glass effect */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 p-6 text-left space-y-4">
          <h3 className="text-2xl font-semibold text-blue-800">Our Journey</h3>
          <p className="text-gray-700">
            Started with only 10 students, we now educate hundreds of young girls in an environment rooted in Islamic tradition and modern understanding.
          </p>
          <p className="text-gray-700">
            Through continuous support from our community, we have expanded our curriculum, facilities, and vision for the future.
          </p>
          <p className="text-blue-900 font-medium">
            Today, Jamia Hafsa lil Banat stands as a proud center of Islamic excellence for girls.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww"
            alt="Establishment"
            className="rounded-xl shadow-2xl border-4 border-white w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Establishment;
