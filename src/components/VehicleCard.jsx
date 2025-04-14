import './../styles/components/VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className='vehicle-card'>
      <div className='card-image'>
        <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
      </div>
      <div className='card-info'>
        <h3>
          {vehicle.brand} {vehicle.model}
        </h3>
        <p>
          <strong>Año:</strong> {vehicle.year}
        </p>
        <p>
          <strong>KM:</strong> {vehicle.km.toLocaleString()}
        </p>
        <p className='price'>${vehicle.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
