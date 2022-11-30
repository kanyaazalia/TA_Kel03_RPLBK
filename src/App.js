// Routing
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

// Icon Footer/Menu
import { AiFillCar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

// Pages
import ProductsPage from "./pages/Products";
// import AboutPage from "./pages/About";

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
          <Route path="/" element={<ProductsPage />}/>
          {/* <Route path="/About" element={<AboutPage />}/> */}
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <AiFillCar className="icon" />
          Products
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <BsFillPersonFill className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
