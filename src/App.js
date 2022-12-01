// Routing
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

// Icon Footer/Menu
import { AiFillAlert, AiFillAmazonCircle, AiFillCar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

// Pages
import ProductsPage from "./pages/Products";
import AboutPage from "./pages/About";
import Meme from "./pages/Meme"
import AnggotaPage from './pages/Anggota.js';

// CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="appHeader">
          <h1 className="appTitle">Automotive Accesories [AA Catalogue]</h1>
        </div>
      </header>
      <Routes>
          <Route path="/" element={<AnggotaPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/about/anggota" element={<AnggotaPage />}/>
          <Route path="/meme" element={<Meme />}/>
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <AiFillAlert className="icon" />
          Home Page
        </NavLink>
        <NavLink to="/meme" className="iconWrapper">
          <AiFillAmazonCircle className="icon" />
          Meme
        </NavLink>
        <NavLink to="/products" className="iconWrapper">
          <AiFillCar className="icon" />
          Products
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <BsFillPersonFill className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
