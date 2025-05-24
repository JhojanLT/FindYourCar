import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import clsx from "clsx";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Button } from "../Button/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className={styles.contactFather}>
      <section id="contacto" className={styles.contactContainerForm}>
        <header className={styles.headerInfo}>
          <h2>¿Necesitas ayuda? ¡Contáctanos!</h2>
          <p>
            ¡Atenderte es nuestra prioridad! Completa el formulario de contacto y experimenta un servicio excepcional.
          </p>
        </header>

        <address className={styles.contactAddress}>
          <ul>
            <li>
              <MdEmail className={styles.icon} />
              <a className={styles.contactLink} href="mailto:contacto@wcar.co">
                http://www.unilibre.edu.co/
              </a>
            </li>
            <li>
              <MdPhone className={styles.icon} />
              <a className={styles.contactLink} href="tel:+57324400212">
                6013821000
              </a>
            </li>
            <li>
              <MdLocationOn className={styles.icon} />
              Cl. 8 #580, Bogotá
            </li>
          </ul>
        </address>

        <div className={styles.opcionesContacto}>
          <article>
            <h3>Contactar a la empresa</h3>
            <p>Haz clic aquí para contactarnos.</p>
            <a className={styles.contactLink} href="#formulario-empresa">
              Contactar a la empresa
            </a>
          </article>

          <article>
            <h3>Contactar venta de vehículo</h3>
            <p>Te ayudamos con todo el proceso de venta.</p>
            <a className={styles.contactLink} href="#formulario-venta">
              Contacta un asesor
            </a>
          </article>

          <article>
            <h3>Contactar con mecánico</h3>
            <p>Solicita servicio para tu vehículo.</p>
            <a className={styles.contactLink} href="#formulario-taller">
              Contactar al taller
            </a>
          </article>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            className={styles.contactInput}
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.contactInput}
            type="email"
            name="email"
            placeholder="Tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className={clsx(styles.contactInput, styles.contactTextarea)}
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button children={"Enviar"} variant="btnTerciary" className={styles.Button} />
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
