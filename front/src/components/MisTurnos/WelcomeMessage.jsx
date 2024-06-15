import React from "react";
import styles from "../MisTurnos/WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={styles.welcome}>
      <h1>Bienvenido de nuevo, Usuario!</h1>
      <p>
        Estamos aquí para ayudarte a gestionar tus turnos de la mejor manera
        posible.
      </p>
    </div>
  );
};

export default WelcomeMessage;
