import React from "react";
// import { useState } from "react";
import styles from "./VehicleCard.module.scss";

const VehicleCard = ({ brand, model, year, price, image, fuelType, transmission, km, onClick }) => {
  return (
    <div className={styles.vehicleCard} onClick={onClick}>
      <div className={styles.cardImage}>
        <img src={image} alt={`${brand} ${model}`} />
      </div>
      <div className={styles.cardInfo}>
        <h3>
          {brand} {model}
        </h3>
        <p>
          <strong>Año:</strong> {year}
        </p>
        <p>
          <strong>KM:</strong> {km.toLocaleString()}
        </p>
        <p>
          <strong>Tipo:</strong> {fuelType}
        </p>
        <p>
          <strong>Transmisión:</strong> {transmission}
        </p>
        <p className={styles.price}>${price.toLocaleString("es-CO")}</p>
      </div>
    </div>
  );
};

export { VehicleCard };
