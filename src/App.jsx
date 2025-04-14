import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
// import SellVehicle from './components/SellVehicle';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Vehicles' element={<Vehicles />} />
        {/*<Route path='/SellVehicle' element={<SellVehicle />} />*/}
        <Route path='/Contact' element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
