import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import SellVehicle from "./components/SellVehicle/SellVehicle";
import ContactForm from "./components/ContactForm/ContactForm";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const Layout = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {/* //Este es un condicional, si se cumple la primera condicion "showNavBar (showNavBar == "/") entonces ocurrirá la condicion "<NavBar/>" */}
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SellVehicle" element={<SellVehicle />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default App;
