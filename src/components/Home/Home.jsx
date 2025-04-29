import React from "react";
import { useState } from "react";
import { VehicleCard } from "./../VehicleCard/VehicleCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { sampleVehicles } from "../../data/cars";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

// Función utilitaria para obtener valores únicos de un array de objetos según una clave específica
const obtenerValoresUnicos = (array, key) => Array.from(new Set(array.map((item) => item[key])));

// Obtener listados únicos para filtros
const carBrands = obtenerValoresUnicos(sampleVehicles, "brand"); // Marcas únicas
const carYears = obtenerValoresUnicos(sampleVehicles, "year").sort(); // Años únicos ordenados
const fuelType = obtenerValoresUnicos(sampleVehicles, "fuelType"); // Tipos de combustible únicos

function Home() {
  // Estado para almacenar los filtros seleccionados
  const [filters, setFilters] = useState({
    brand: "", // Marca seleccionada
    year: "", // Año seleccionado
    fuelType: "", // Tipo de combustible seleccionado
    priceRangeIndex: "", // Índice del rango de precio seleccionado
  });

  /**
   * Maneja cambios en los filtros
   * @param {Object} e - Evento del input/select
   * Actualiza el estado de filters con el nuevo valor
   * Convierte a número el priceRangeIndex ya que viene como string del select
   */
  const filterHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "priceRangeIndex" ? parseInt(value) : value,
    }));
  };

  // Reinicia todos los filtros a sus valores iniciales (vacíos)
  const resetFilters = () => {
    setFilters({
      brand: "",
      year: "",
      fuelType: "",
      priceRangeIndex: "",
    });
  };

  // Definición de rangos de precios disponibles para filtrar
  const priceRanges = [
    { label: "Todos", min: 0, max: Infinity }, // Opción para mostrar todos los vehículos
    { label: "0 - 50M", min: 0, max: 50000000 },
    { label: "50M - 100M", min: 50000000, max: 100000000 },
    { label: "100M - 150M", min: 100000000, max: 150000000 },
    { label: "150M - 200M", min: 150000000, max: 200000000 },
    { label: "200M - 250M", min: 200000000, max: 250000000 },
    { label: "250M - 300M", min: 250000000, max: 300000000 },
    { label: "300M - 350M", min: 300000000, max: 350000000 },
  ];

  /**
   * Filtra los vehículos según los criterios seleccionados
   * Aplica filtros de marca, año, combustible y rango de precio
   * Si un filtro está vacío (""), no se aplica ese criterio
   */
  const filteredVehicles = sampleVehicles.filter((car) => {
    const range = priceRanges[filters.priceRangeIndex];
    return (
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.year || car.year === parseInt(filters.year)) &&
      (!filters.fuelType || car.fuelType === filters.fuelType) &&
      (!range || (car.price >= range.min && car.price <= range.max))
    );
  });

  // Estado para controlar qué vehículo está seleccionado para ver sus detalles
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  /**
   * Maneja el click en una tarjeta de vehículo
   * //@param {Object} vehicle - Vehículo seleccionado
   * Actualiza el estado para mostrar el modal de detalles
   */
  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  // Cierra el modal de detalles estableciendo selectedVehicle a null
  const handleClose = () => {
    setSelectedVehicle(null);
  };

  //Funcion que riderecciona l formulario de compra al hacer click en "comprar" en el modal
  const navigate = useNavigate();
  const buyButton = () => {
    navigate("/Contact");
  };

  return (
    <div className={styles.mainContainer}>
      {/* Sección hero con título y subtítulo */}
      <div className={styles.heroContainer}>
        <h1>Encuentra tu coche Ideal</h1>
        <div className={styles.subtitleContainer}>
          <p>Vehículos de calidad al mejor precio</p>
        </div>
      </div>

      {/* Componente de búsqueda con filtros */}
      <SearchBar
        brands={carBrands}
        years={carYears}
        fuelType={fuelType}
        priceRanges={priceRanges}
        filters={filters}
        applyFilter={filterHandleChange} // Función para manejar cambios en filtros
        resetFilters={resetFilters} // Función para reiniciar filtros
      />

      {/* Contenedor de tarjetas de vehículos */}
      <div className={styles.cardContainer}>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} onClick={() => handleVehicleClick(vehicle)} {...vehicle} />
        ))}
      </div>

      {/* Muestra mensaje si no hay vehículos que coincidan con los filtros */}
      {filteredVehicles.length === 0 && <p>No hay vehículos que coincidan con los filtros.</p>}

      {/* Modal de detalles - se muestra solo cuando hay un vehículo seleccionado */}
      {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} onClose={handleClose} onclick={buyButton} />}
    </div>
  );
}

export { Home };
