import Home from "./Home";
import Welcome from "./Welcome";
import SocialSidebar from "./SocialSidebar";
import GalleryShowcase from "./GalleryShowcase";
import GuestsIjlasGallery from "./GuestsIjlasGallery";

const HomeLayout = () => {
  return (
    <>
      <Home />
      <SocialSidebar />
      <Welcome />
      <GalleryShowcase />
      <GuestsIjlasGallery />
    </>
  );
};

export default HomeLayout;
