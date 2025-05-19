import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página, Sin ese e.preventDefault(), la página se recargaría y perdería el estado y la navegación con React Router.

    // Aquí se pueden agregar autenticaciones

    navigate("/Home"); // Redirige a la página principal
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Paso 3 */}
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" />
          <button type="submit">Entrar</button>
        </form>
        <p className={styles.registerLink}>
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
