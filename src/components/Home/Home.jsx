import React from "react";
import { useState } from "react";
import { VehicleCard } from "./../VehicleCard/VehicleCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { sampleVehicles } from "../../data/cars";

import styles from "./Home.module.scss";

const obtenerValoresUnicos = (array, key) => Array.from(new Set(array.map((item) => item[key])));

const carBrands = obtenerValoresUnicos(sampleVehicles, "brand");

const carYears = obtenerValoresUnicos(sampleVehicles, "year").sort();

const fuelType = obtenerValoresUnicos(sampleVehicles, "fuelType");

function Home() {
  const [filters, setFilters] = useState({
    brand: "",
    year: "",
    fuelType: "",
    priceRangeIndex: "",
  });

  //Este codigo "filterHandleChange" se ejecuta en el OnChange y lo que hace es modificar el contenido del estado "filters", la informacion que se contiene en ese estado luego se comparará con la muestra completa de vehiculos "sampleVehicles"
  const filterHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, [name]: name === "priceRangeIndex" ? parseInt(value) : value }));
  };

  const priceRanges = [
    { label: "Todos", min: 0, max: Infinity }, // Nuevo primer rango

    { label: "0 - 50M", min: 0, max: 50000000 },
    { label: "50M - 100M", min: 50000000, max: 100000000 },
    { label: "100M - 150M", min: 100000000, max: 150000000 },
    { label: "150M - 200M", min: 150000000, max: 200000000 },
    { label: "200M - 250M", min: 200000000, max: 250000000 },
    { label: "200M - 250M", min: 250000000, max: 300000000 },
    { label: "200M - 250M", min: 300000000, max: 350000000 },
  ];
  const filteredVehicles = sampleVehicles.filter((car) => {
    const range = priceRanges[filters.priceRangeIndex];

    return (
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.year || car.year === parseInt(filters.year)) &&
      (!filters.fuelType || car.fuelType === filters.fuelType) &&
      (!range || (car.price >= range.min && car.price <= range.max))
    );
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <h1>Encuentra tu coche Ideal</h1>
        <div className={styles.subtitleContainer}>
          <p>Vehiculos de calidad al mejor precio</p>
        </div>
      </div>
      <SearchBar
        brands={carBrands}
        years={carYears}
        fuelType={fuelType}
        priceRanges={priceRanges}
        filters={filters}
        aplyFilter={filterHandleChange}
      />
      <div className={styles.cardContainer}>
        {filteredVehicles.map((vehicle) => {
          return <VehicleCard key={vehicle.id} {...vehicle} />;
        })}
      </div>
    </div>
  );
}

export { Home };
