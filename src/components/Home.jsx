import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-auto md:h-[75vh] px-4 sm:px-6 md:px-10 lg:px-16 py-10 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug" style={{fontFamily:"Poppins"}}>
            "The best among you are those who learn the Qur'an and teach it."
          </h2>

          <div className="mt-4 space-y-3 text-gray-500 text-base sm:text-lg font-medium">
            <p style={{fontFamily:"Poppins"}}>
              Empowering girls through Islamic education and values at Madarsa Islamia Arabia Hafsa lil Banat.
            </p>
            <p style={{fontFamily:"Poppins"}}>
              Providing a nurturing environment where young minds grow with faith, knowledge, and discipline.
            </p>
            <p style={{fontFamily:"Poppins"}}>
              We aim to shape confident, spiritually grounded, and socially responsible daughters of the Ummah.
            </p>
          </div>

          {/* Glass Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/aboutus"
              className="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md text-blue-900 font-semibold hover:bg-white/40 transition"
            >
              About us
            </Link>
            <Link
              to="/contactus"
              className="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md text-blue-900 font-semibold hover:bg-white/40 transition"
            >
              Contact Info
            </Link>
          </div>
        </div>

        {/* Right Image Section - hidden on mobile */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center relative min-h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1728404059710-71c6c98270ea?w=500&auto=format&fit=crop&q=60"
            alt="Student 1"
            className="absolute rounded-full object-cover h-60 w-44 top-0 left-10 shadow-lg border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1660796116040-0a390ad60727?w=500&auto=format&fit=crop&q=60"
            alt="Student 2"
            className="absolute rounded-full object-cover h-60 w-44 top-12 left-38 shadow-lg border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1704859599421-565b8ef20a9f?w=500&auto=format&fit=crop&q=60"
            alt="Student 3"
            className="absolute rounded-full object-cover h-60 w-44 top-24 left-72 shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
