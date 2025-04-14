import React from 'react';
import './../styles/components/NavBar.css';
import FindCarLogo from './../assets/img/FindYourCarLogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar-father'>
      <Link to='/'>
        <img src={FindCarLogo} alt='Logo FindYourCar' />
      </Link>

      <div className='nav-bar'>
        <nav>
          <ul>
            <li>
              <Link className='item' to='/'>
                Inicio
              </Link>
            </li>
            <li>
              <Link className='item' to='/Vehicles'>
                Vehiculos
              </Link>
            </li>
            <li>
              <Link className='item' to='/SellVehicles'>
                Vender tu vehiculo
              </Link>
            </li>
          </ul>
        </nav>
        <div className='contact-container'>
          <Link className='item' to='/Contact'>
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
