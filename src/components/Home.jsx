import React from 'react';
import VehicleCard from './VehicleCard';
// import Hero from './Hero';

import './../styles/components/Home.css';

function Home() {
  // Datos de ejemplo
  const sampleVehicle = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      km: 45000,
      price: 25000,
      image: 'https://www.revistaautocrash.com/wp-content/uploads/2019/11/corolla-2020.jpg',
    },
    {
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
      km: 38000,
      price: 23000,
      image:
        'https://image.tienphong.vn/w890/Uploaded/2025/izb_dk/2018_08_14/TPO_2019_honda_civic_2__PSLZ.jpg',
    },
    {
      brand: 'Ford',
      model: 'Focus',
      year: 2018,
      km: 52000,
      price: 21000,
      image:
        'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/07/ford-focus-2018.jpg?tf=3840x',
    },
    {
      brand: 'Chevrolet',
      model: 'Cruze',
      year: 2021,
      km: 30000,
      price: 26000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWSCHVpcRg4Q0jwvpCuJ-3Ay2CCYK3WpTmA&s',
    },
    {
      brand: 'Mazda',
      model: '3',
      year: 2022,
      km: 15000,
      price: 27500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEniGP0nM8yV85WRRCS35k09G7V_0oxxG9Q&s',
    },
    {
      brand: 'Nissan',
      model: 'Sentra',
      year: 2017,
      km: 60000,
      price: 19500,
      image:
        'https://www.nissan-cdn.net/content/dam/Nissan/co/prensa/Nissan%20Sentra.jpg.ximg.m_12_h.smart.jpg',
    },
    {
      brand: 'Mazda',
      model: 'CX-5',
      year: 2021,
      km: 30000,
      price: 32000,
      image:
        'https://es.mazda-press.com/siteassets/assets/news-heroes/mazdacxcincohomura.jpg/highdefinitionhalfsize?token=DNMRPzmo7mHjtgIEzFTPDxlilrsqWqzZvtd65ctvG_U1',
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2018,
      km: 55000,
      price: 40000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyQj3MVmh9nON5T8m1IVCY0dumI2ze00X1g&s',
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2019,
      km: 42000,
      price: 38000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2QBTnr7orWjvDvmKodbxMSgP_7c-D0E1Nw&s',
    },
    {
      brand: 'BMW',
      model: 'X3',
      year: 2022,
      km: 15000,
      price: 52000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD2zwuhhAVyOx6KNi89ahNvKiqq2ZTZrkRQ&s',
    },
    {
      brand: 'Kia',
      model: 'Sportage',
      year: 2020,
      km: 36000,
      price: 27000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGFIkWZIw6_esFwCbtDdBiO6BHUDYa1d0rQ&s',
    },
    {
      brand: 'Hyundai',
      model: 'Tucson',
      year: 2017,
      km: 67000,
      price: 22000,
      image: 'https://soymotor.com/sites/default/files/imagenes/noticia/hyundai_tucson_frontal.jpg',
    },
  ];

  return (
    <div className='main-container'>
      <div className='hero-container'>
        <h1>Encuentra tu coche Ideal</h1>
        <div className='subtitle-container'>
          <p>Vehiculos de calidad al mejor precio</p>
        </div>
      </div>
      <div className='cardContainer'>
        {sampleVehicle.map((vehicle) => {
          return <VehicleCard key={vehicle.image} vehicle={vehicle} />;
        })}
      </div>
    </div>
  );
}

export default Home;
