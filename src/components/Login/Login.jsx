import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Iniciar Sesión</h2>
        <form>
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
