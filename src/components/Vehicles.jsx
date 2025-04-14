import React from 'react';
import { useState } from 'react';
import './../styles/components/Vehicles.css';

const carBrands = ['Toyota', 'Honda', 'Ford', 'Mazda', 'Chevrolet'];

function Vehicles() {
  const [selectedBrand, setSelectedBrand] = useState('');

  return (
    <div className='vehicle-father'>
      <div className='vehicle-container'>
        <h1>Vehículos en venta</h1>
        <form className='vehicle-form'>
          <div>
            <select
              className='vehicle-form__input width-remaining'
              name='brand'
              required
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value='' disabled hidden defaultValue>
                Marca
              </option>
              {carBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <input
              required
              className='vehicle-form__input width70'
              type='number'
              name='year'
              placeholder='Año'
            />
          </div>

          <div>
            <input
              required
              className='vehicle-form__input width70'
              type='number'
              name='price'
              placeholder='Precio'
            />
            <button className='vehicle-form__input width-remaining button' type='submit'>
              Buscar
            </button>
            {/* <textarea className='vehicle-form__input' name='mensaje' placeholder='Tu mensaje' /> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Vehicles;
