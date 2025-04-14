import React, { useState } from 'react';
import './../styles/components/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <div className='contact-father'>
      <div className='contact-container__form'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            className='contact-input'
            type='text'
            name='name'
            placeholder='Tu nombre'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className='contact-input'
            type='email'
            name='email'
            placeholder='Tu correo'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className='contact-input contact-textarea'
            name='message'
            placeholder='Tu mensaje'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type='submit' className='contact-button'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
