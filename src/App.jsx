// src/App.jsx
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Movies from "./pages/Movies";
import ProductList001 from "./pages/Uncontrolled";
import ProductList002 from "./pages/Controlled";
import Day4 from "./pages/Day4";

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
      { path: "login", element: <LoginForm /> }, //LoginForm
      { path: "aboutus", element: <About /> },
      { path: "day4", element: <Day4 /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
