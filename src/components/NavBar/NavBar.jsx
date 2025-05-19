import React from "react";
import styles from "./NavBar.module.scss";
import FindCarLogo from "./../../assets/img/FindYourCarLogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBarFather}>
      <Link to="/Home">
        <img src={FindCarLogo} alt="Logo FindYourCar" />
      </Link>

      <div className={styles.navBar}>
        <nav>
          <ul>
            <li>
              <Link className={styles.item} to="/Home">
                Inicio
              </Link>
            </li>

            <li>
              <Link className={styles.item} to="/SellVehicle">
                Vende tu vehiculo
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contactContainer}>
          <Link className={styles.item} to="/Contact">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
