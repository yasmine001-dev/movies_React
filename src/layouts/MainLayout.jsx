import Home from "../pages/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
<Outlet></Outlet>
      <Footer />
    </>
  );
}

export default MainLayout;
