import React from "react";
import styles from "./VehicleDetails.module.scss";

function VehicleDetails({ vehicle, onClose }) {
  return (
    <div className={styles.VehicleDetails}>
      <button onClick={onClose}>Cerrar</button>
      <h2>{vehicle.title}</h2>
      <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`} />
      <p>
        <strong>Marca:</strong> {vehicle.brand}
      </p>
      <p>
        <strong>Modelo:</strong> {vehicle.model}
      </p>
      <p>
        <strong>Año:</strong> {vehicle.year}
      </p>
      <p>
        <strong>Combustible:</strong> {vehicle.fuelType}
      </p>
      <p>
        <strong>Precio:</strong> ${vehicle.price}
      </p>
      <p>
        <strong>Descripción:</strong> {vehicle.description}
      </p>
    </div>
  );
}

export { VehicleDetails };
