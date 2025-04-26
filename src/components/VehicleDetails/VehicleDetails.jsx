// VehicleDetails.jsx
import React from 'react';
import styles from './VehicleDetails.module.scss';

const VehicleDetails = ({ vehicle, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
        <div className={styles.contentStyles}>
          <h2>
            {vehicle.brand} {vehicle.model}
          </h2>
          <div className={styles.alignContentLeft}>
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
              <strong>Precio:</strong> ${vehicle.price.toLocaleString('es-CO')}
            </p>
            <p>
              <strong>Color:</strong> {vehicle.color}
            </p>
            {/* <button onClick={onClose}>Cerrar</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { VehicleDetails };
