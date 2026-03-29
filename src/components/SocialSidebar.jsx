 
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col gap-4 pl-1">
      <a
        href="https://www.facebook.com/profile.php?id=61578064712720"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg flex justify-center items-center transition-all duration-300"
        title="Facebook"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://x.com/JamiaContact313"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-r-lg flex justify-center items-center transition-all duration-300"
        title="Twitter"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://plus.unsplash.com/premium_photo-1677523780036-1b1970552854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxpc2xhbWljJTIwYmFieSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-r-lg flex justify-center items-center transition-all duration-300"
        title="Instagram"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-r-lg flex justify-center items-center transition-all duration-300"
        title="YouTube"
      >
        <FaYoutube size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;
