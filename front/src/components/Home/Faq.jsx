import React from "react";
import styles from "../Home/Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h2>Preguntas Frecuentes</h2>
      <div className={styles.question}>
        <h3>¿Cómo puedo reservar un turno?</h3>
        <p>
          Para reservar un turno, simplemente ve a la página de turnos y sigue
          los pasos indicados.
        </p>
      </div>
      <div className={styles.question}>
        <h3>¿Cuáles son los métodos de pago aceptados?</h3>
        <p>Aceptamos pagos con tarjeta de crédito y débito.</p>
      </div>
      <div className={styles.question}>
        <h3>¿Qué hago si tengo un problema con mi reserva?</h3>
        <p>
          Si tienes algún problema con tu reserva, por favor contáctanos a
          través de nuestro formulario de contacto.
        </p>
      </div>
    </div>
  );
};

export default Faq;
