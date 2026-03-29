import Home from "./Home";
import Welcome from "./Welcome";
import SocialSidebar from "./SocialSidebar";
import GalleryShowcase from "./GalleryShowcase";
import GuestsIjlasGallery from "./GuestsIjlasGallery";
import AdmissionBanner from "../utils/AdmissionBanner";

const HomeLayout = () => {
  
  return (
    <>
     <AdmissionBanner />
      <Home />
      <SocialSidebar />
      <Welcome />
      <GalleryShowcase />
      <GuestsIjlasGallery />
    </>
  );
};

export default HomeLayout;
