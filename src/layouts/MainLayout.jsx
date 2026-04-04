import Movies from '../pages/Movies';
import Home from '../pages/Home';
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
    <main>
        <Outlet /> {/* نقطة العرض الديناميكية للمسارات */}
      </main>
    <Home/>
      <Movies/>
    </>
  );
}

export default MainLayout;