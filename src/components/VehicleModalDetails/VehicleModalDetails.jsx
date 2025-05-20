// VehicleDetails.jsx
import React from "react";
import styles from "./VehicleModalDetails.module.scss";
import { Button } from "../Button/Button";

const VehicleModalDetails = ({ vehicle, onClose, onclick }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
        </div>
        <div className={styles.contentStyles}>
          <h2>
            {vehicle.brand} {vehicle.model}
          </h2>

          <p>
            <strong>Año:</strong> {vehicle.year}
          </p>
          <p>
            <strong>Kilometraje:</strong> {vehicle.km.toLocaleString()}
          </p>
          <p>
            <strong>Combustible:</strong> {vehicle.fuelType}
          </p>
          <p>
            <strong>Transmisión:</strong> {vehicle.transmission}
          </p>
          <p>
            <strong>Precio:</strong> ${vehicle.price.toLocaleString("es-CO")}
          </p>
          <p>
            <strong>Color:</strong> {vehicle.color}
          </p>

          <div className={styles.buttonsContent}>
            <Button children={"Cerrar"} variant="btnPrimary" onClick={onClose} />
            <Button children={"Comprar"} variant="btnSecondary" onClick={onclick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VehicleModalDetails };
