import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import clsx from "clsx";

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
          <h2>
            ¿Necesitas ayuda? <br /> ¡Contáctanos!
          </h2>
          <p>
            ¡Atenderte es nuestra prioridad! Completa el formulario de contacto y experimenta un servicio excepcional.
          </p>
        </header>

        <address>
          <ul>
            <li>
              <a href="mailto:contacto@wcar.co">📧 contacto@wcar.co</a>
            </li>
            <li>
              <a href="tel:+57324400212">📞 +57 324 4001212</a>
            </li>
            <li>📍 Calle 98a # 69B-35</li>
          </ul>
        </address>

        <div className="opciones-contacto">
          <article>
            <h3>Contactar a la empresa</h3>
            <p>Haz clic aquí para contactarnos.</p>
            <a href="#formulario-empresa">Contactar a la empresa</a>
          </article>

          <article>
            <h3>Contactar venta de vehículo</h3>
            <p>Te ayudamos con todo el proceso de venta.</p>
            <a href="#formulario-venta">Contacta un asesor</a>
          </article>

          <article>
            <h3>Contactar con mecánico</h3>
            <p>Solicita servicio para tu vehículo.</p>
            <a href="#formulario-taller">Contactar al taller</a>
          </article>
        </div>
      </section>
    </div>
    // <div className={styles.contactFather}>
    //   <div className={styles.contactContainerForm}>
    //     <form className={styles.contactForm} onSubmit={handleSubmit}>
    //       <input
    //         className={styles.contactInput}
    //         type="text"
    //         name="name"
    //         placeholder="Tu nombre"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //       />
    //       <input
    //         className={styles.contactInput}
    //         type="email"
    //         name="email"
    //         placeholder="Tu correo"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //       <textarea
    //         className={clsx(styles.contactInput, styles.contactTextarea)}
    //         name="message"
    //         placeholder="Tu mensaje"
    //         value={formData.message}
    //         onChange={handleChange}
    //         required
    //       />
    //       <button type="submit" className={styles.contactButton}>
    //         Enviar
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default ContactForm;
