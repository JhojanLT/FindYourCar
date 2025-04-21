// VehicleDetails.jsx
import React from "react";
import styles from "./VehicleDetails.module.scss";

const VehicleDetails = ({ vehicle, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Cerrar</button>
        <h2>
          {vehicle.brand} {vehicle.model}
        </h2>
        <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
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
      </div>
    </div>
  );
};

export { VehicleDetails };
