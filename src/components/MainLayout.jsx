import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  // agar future me kisi route pe header/footer hide karna ho
  const hideLayoutRoutes = [];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}

      <div className="">
        <Outlet />
      </div>

      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
