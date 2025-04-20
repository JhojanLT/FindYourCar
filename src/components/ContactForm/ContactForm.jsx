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
      <div className={styles.contactContainerForm}>
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
          <button type="submit" className={styles.contactButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
