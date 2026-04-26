import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from './App.jsx';
import UserContextProvider from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <App/>
    </UserContextProvider>

)
//npms: 
// npm install styled-components
//npm i styled-components
