import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2 className="contact-titulo">/contacto</h2>
      <p className="p-contact">
        ¿Tienes alguna duda o quieres trabajar conmigo?
      </p>
      <form className="contact-form">
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="Nombre" />

        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
        />

        <label htmlFor="message"></label>
        <textarea id="message" name="message" placeholder="Mensaje" />

        <button className="contact-button" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
