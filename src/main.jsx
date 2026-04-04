import { createRoot } from 'react-dom/client'
import Home from "./pages/Home.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById('root')).render(
    // <Home />
    <MainLayout/>
)
