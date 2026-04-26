//components:
import NotFound from "./components/NotFound";
import Actors from "./components/Actors";
import MiddleEast from "./components/MiddleEast";
import Hollywood from "./components/Hollywood";
import Bollywood from "./components/Bollywood";

//layouts:
import MainLayout from "./layouts/MainLayout";
//Pages:
import About from "./pages/About";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import Movies from "./pages/Movies";
import ProductList001 from "./pages/Uncontrolled";
import ProductList002 from "./pages/Controlled";
import Day4 from "./pages/Day4";
import RegisterForm from "./pages/Registration";
//other
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

let x = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "form001", element: <ProductList001 /> },
      { path: "form002", element: <ProductList002 /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "aboutus", element: <About /> },
      { path: "day4", element: <Day4 /> },
      {
        path: "actors",
        element: <Actors />,
        children: [
          // { index: true, element: <Hollywood /> },
          { path: "hollywood", element: <Hollywood /> },
          { path: "middleEast", element: <MiddleEast /> },
          { path: "bollywood", element: <Bollywood /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
