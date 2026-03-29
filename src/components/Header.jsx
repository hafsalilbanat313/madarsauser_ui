import { useState,useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import Translator from "./Translator"; // ⬅ import the translator
import "../App.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [announcement, setAnnouncement] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
   const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  
useEffect(() => {
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  checkAuth(); // initial check

  // 🔥 listen for login/logout
  window.addEventListener("authChange", checkAuth);

  return () => {
    window.removeEventListener("authChange", checkAuth);
  };
}, []);
const handleLogout = () => {
  localStorage.removeItem("token");

  window.dispatchEvent(new Event("authChange")); // 🔥

  navigate("/login");
};


  return (
    <>
      {/* Scrolling Notice */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-tr from-blue-900 to-blue-700 text-white font-extrabold py-2 shadow-lg">
      <div className="overflow-hidden whitespace-nowrap">
  <div className="animate-marquee inline-block pl-[100%] text-sm font-semibold text-white">
    <span className="bg-red-600 text-yellow-300 rounded-2xl px-2  mr-3">
      🚀 Important
    </span>
    {announcement?.message ? announcement.message : "Welcome to jamia hafsa lil banat"}
  </div>
</div>
      </div>

      {/* Header */}
      <div className="fixed top-8 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/mylogowoutbg.png"
              alt="Logo"
              className="h-12 w-10 transition-transform duration-300 hover:scale-[2.5]"
            />
          </div>

          {/* Title */}
          <div className="text-center flex-1">
           <span className="text-base sm:text-sm md:text-lg font-bold text-blue-900" style={{ fontFamily: "Cinzel, serif" }}>
              Jamia Hafsa lil Banat,Ratupura
            </span>
          </div>
             <div>
   <button
  onClick={() => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate("/login");
    }
  }}
  className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 mr-2 rounded-full text-sm shadow-lg transition backdrop-blur-md bg-opacity-80"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  {isLoggedIn ? "Logout" : "Login"}
</button>
    </div>

          {/* Right Section */}
         <div className="flex items-center space-x-2">
  {/* 🔁 Donate Button */}
  <Link
    to="/bankdetails"
    className="bg-blue-700 hover:bg-blue-800 text-white px-2 py-1 rounded-full text-sm shadow-lg transition backdrop-blur-md bg-opacity-80"
   style={{fontFamily:"Poppins"}}>
    Donate
  </Link>
   <div id="google_translate_element" className="google-translate"> 

  {/* 🌐 Translator - Always visible */}
  <Translator />
</div>
  {/* Mobile Menu Button */}
  <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 md:hidden">
    {isOpen ? <X size={26} /> : <Menu size={26} />}
  </button>
</div>

        </div>
      </div>

      {/* Navigation Menu */}
      <div className="fixed top-24 left-0 w-full z-40 backdrop-blur-md bg-white/30 shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center space-x-4 text-sm font-medium text-blue-900" style={{fontFamily:"Poppins"}}>
            {NavItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center gap-1 py-2 px-2 hover:text-blue-600"
                    >
                      {item.label["en"]}
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute top-full left-0  w-56 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded hidden group-hover:block z-50">
                      <ul className="flex flex-col py-2">
                        {item.children.map((child, cIndex) => (
                          <li key={cIndex}>
                            <Link
                              to={child.link}
                              onClick={() => child.onClick?.()}
                              className="block px-4 py-2 hover:bg-blue-100 text-blue-900"
                            >
                              {child.label["en"]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => item.onClick?.()}
                    className="py-2 px-2 hover:text-blue-600 inline-block"
                  >
                    {item.label["en"]}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Nav */}
          {isOpen && (
            <nav className="md:hidden flex flex-col space-y-1 py-3">
              {NavItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex justify-between items-center w-full px-4 py-2 text-blue-900 hover:bg-blue-100"
                      >
                        {item.label["en"]}
                        <ChevronDown size={16} className="ml-2" />
                      </button>
                      {openDropdown === index && (
                        <div className="bg-white/80 backdrop-blur-md">
                          <ul className="flex flex-col py-1">
                            {item.children.map((child, cIndex) => (
                              <li key={cIndex}>
                                <Link
                                  to={child.link}
                                  onClick={() => {
                                    setIsOpen(false);
                                    child.onClick?.();
                                  }}
                                  className="block px-6 py-1 text-sm text-blue-800 hover:text-blue-600"
                                >
                                  {child.label["en"]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={() => {
                        setIsOpen(false);
                        item.onClick?.();
                      }}
                      className="block px-4 py-2 text-blue-900 hover:bg-blue-100"
                    >
                      {item.label["en"]}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-18 md:h-32"></div>
    </>
  );
};

export default Header;
