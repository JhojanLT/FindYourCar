//import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { Button } from "../Button/Button";
import clsx from "clsx";

function SearchBar({ brands, years, fuelType, priceRanges, filters, applyFilter, resetFilters }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de búsqueda:", filters);
    // Aquí puedes agregar lógica para filtrar vehículos o enviar datos a una API
  };

  return (
    <div className={styles.vehicleFather}>
      <div className={styles.vehicleContainer}>
        <form className={styles.vehicleForm} onSubmit={handleSubmit}>
          <div className={styles.vehicleGroup}>
            <select
              className={clsx(styles.vehicleInput, styles.width30)}
              name="brand"
              value={filters.brand}
              onChange={applyFilter}
            >
              <option value="" disabled hidden>
                Marca
              </option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <select
              className={clsx(styles.vehicleInput, styles.width30)}
              type="number"
              name="year"
              value={filters.year}
              onChange={applyFilter}
            >
              <option value="" disabled hidden>
                Año
              </option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              className={clsx(styles.vehicleInput, styles.widthRemaining)}
              name="fuelType"
              value={filters.fuelType}
              onChange={applyFilter}
            >
              <option value="" disabled hidden>
                Tipo
              </option>
              {fuelType.map((Type, index) => (
                <option key={index} value={Type}>
                  {Type}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.vehicleGroup}>
            {/* Precio Option */}
            <select
              className={clsx(styles.vehicleInput, styles.widthRemaining)}
              name="priceRangeIndex"
              value={filters.priceRangeIndex}
              onChange={applyFilter}
            >
              <option value="" disabled hidden>
                Precio
              </option>
              {priceRanges.map((range, index) => (
                <option key={index} value={index}>
                  {range.label}
                </option>
              ))}
            </select>
            <Button
              children={"Limpiar"}
              variant="btnTerciary"
              onClick={resetFilters}
              className={clsx(styles.vehicleInput, styles.width30, styles.vehicleButton)}
            />

            {/* <button
              className={clsx(styles.vehicleInput, styles.width30, styles.vehicleButton)}
              onClick={resetFilters}
              type="button"
            >
              Limpiar
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export { SearchBar };
