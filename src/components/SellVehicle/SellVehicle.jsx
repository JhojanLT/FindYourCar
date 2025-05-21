// src/components/SellVehicle/SellVehicle.js
import React, { useState } from "react";
import { Button } from "../Button/Button"; // Asegúrate que la ruta a tu botón sea correcta
import styles from "./SellVehicle.module.scss";

const SellVehicle = () => {
  const [formData, setFormData] = useState({
    // Datos Personales
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    // Datos del Vehículo
    marca: "",
    referencia: "", // O modelo
    anio: "",
    version: "",
    km: "",
    ubicacionVehiculo: "",
    ciudadMatricula: "",
    color: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Opcional: limpiar error cuando el usuario empieza a corregir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // Datos Personales
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido.";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido.";
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido.";
    } else if (!/^\d{7,15}$/.test(formData.telefono)) {
      // Ejemplo: entre 7 y 15 dígitos
      newErrors.telefono = "El formato del teléfono no es válido.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }

    // Datos del Vehículo
    if (!formData.marca.trim()) newErrors.marca = "La marca es requerida.";
    if (!formData.referencia.trim()) newErrors.referencia = "La referencia/modelo es requerida.";
    if (!formData.anio.trim()) {
      newErrors.anio = "El año es requerido.";
    } else if (
      !/^\d{4}$/.test(formData.anio) ||
      parseInt(formData.anio) > new Date().getFullYear() ||
      parseInt(formData.anio) < 1900
    ) {
      newErrors.anio = "Año inválido.";
    }
    if (!formData.km.trim()) {
      newErrors.km = "El kilometraje es requerido.";
    } else if (isNaN(formData.km) || Number(formData.km) < 0) {
      newErrors.km = "Kilometraje inválido.";
    }
    if (!formData.ubicacionVehiculo.trim()) newErrors.ubicacionVehiculo = "La ubicación del vehículo es requerida.";
    if (!formData.ciudadMatricula.trim()) newErrors.ciudadMatricula = "La ciudad de matrícula es requerida.";
    if (!formData.color.trim()) newErrors.color = "El color es requerido.";
    // 'version' puede ser opcional o requerida según tu lógica

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario Válido. Datos a enviar:", formData);
      // Aquí integrarías la lógica para enviar los datos a un backend,
      // actualizar el estado global, etc.
      alert("¡Vehículo registrado para la venta! (Revisa la consola para ver los datos)");
      // Opcional: Resetear el formulario
      // setFormData({ ...initialState... });
    } else {
      console.log("Formulario con errores:", errors);
      alert("Por favor, corrige los errores del formulario.");
    }
  };

  return (
    <div className={styles.formPageContainer}>
      <h1 className={styles.formTitle}>Vende tu Vehículo</h1>
      <form onSubmit={handleSubmit} className={styles.sellForm} noValidate>
        {/* --- Sección Datos Personales --- */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>Datos Personales</legend>

          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.formLabel}>
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.nombre ? styles.inputError : ""}`}
            />
            {errors.nombre && <p className={styles.errorMessage}>{errors.nombre}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="apellido" className={styles.formLabel}>
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.apellido ? styles.inputError : ""}`}
            />
            {errors.apellido && <p className={styles.errorMessage}>{errors.apellido}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefono" className={styles.formLabel}>
              Teléfono:
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.telefono ? styles.inputError : ""}`}
            />
            {errors.telefono && <p className={styles.errorMessage}>{errors.telefono}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
          </div>
        </fieldset>

        {/* --- Sección Datos del Vehículo --- */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>Datos del Vehículo</legend>

          <div className={styles.formGroup}>
            <label htmlFor="marca" className={styles.formLabel}>
              Marca:
            </label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.marca ? styles.inputError : ""}`}
            />
            {/* Sugerencia: Podrías usar un <select> aquí si tienes una lista de marcas */}
            {errors.marca && <p className={styles.errorMessage}>{errors.marca}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="referencia" className={styles.formLabel}>
              Referencia/Modelo:
            </label>
            <input
              type="text"
              id="referencia"
              name="referencia"
              value={formData.referencia}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.referencia ? styles.inputError : ""}`}
            />
            {errors.referencia && <p className={styles.errorMessage}>{errors.referencia}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="anio" className={styles.formLabel}>
              Año:
            </label>
            <input
              type="number"
              id="anio"
              name="anio"
              value={formData.anio}
              onChange={handleChange}
              placeholder="Ej: 2020"
              className={`${styles.formInput} ${errors.anio ? styles.inputError : ""}`}
            />
            {/* Sugerencia: Podrías usar un <select> para los años */}
            {errors.anio && <p className={styles.errorMessage}>{errors.anio}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="version" className={styles.formLabel}>
              Versión (Opcional):
            </label>
            <input
              type="text"
              id="version"
              name="version"
              value={formData.version}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="km" className={styles.formLabel}>
              Kilometraje:
            </label>
            <input
              type="number"
              id="km"
              name="km"
              value={formData.km}
              onChange={handleChange}
              placeholder="Ej: 25000"
              className={`${styles.formInput} ${errors.km ? styles.inputError : ""}`}
            />
            {errors.km && <p className={styles.errorMessage}>{errors.km}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="ubicacionVehiculo" className={styles.formLabel}>
              Ubicación del Vehículo (Ciudad):
            </label>
            <input
              type="text"
              id="ubicacionVehiculo"
              name="ubicacionVehiculo"
              value={formData.ubicacionVehiculo}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.ubicacionVehiculo ? styles.inputError : ""}`}
            />
            {errors.ubicacionVehiculo && <p className={styles.errorMessage}>{errors.ubicacionVehiculo}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="ciudadMatricula" className={styles.formLabel}>
              Ciudad de Matrícula:
            </label>
            <input
              type="text"
              id="ciudadMatricula"
              name="ciudadMatricula"
              value={formData.ciudadMatricula}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.ciudadMatricula ? styles.inputError : ""}`}
            />
            {errors.ciudadMatricula && <p className={styles.errorMessage}>{errors.ciudadMatricula}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="color" className={styles.formLabel}>
              Color:
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className={`${styles.formInput} ${errors.color ? styles.inputError : ""}`}
            />
            {errors.color && <p className={styles.errorMessage}>{errors.color}</p>}
          </div>
        </fieldset>

        <Button type="submit" variant="primary" className={styles.submitButton}>
          Registrar Vehículo
        </Button>
      </form>
    </div>
  );
};

export default SellVehicle;
