import React from "react";
import styles from "../MisTurnos/Tips.module.css";

const Tips = () => {
  return (
    <div className={styles.tips}>
      <h2>Consejos y Recomendaciones</h2>
      <p>
        Recuerda siempre verificar la fecha y hora de tus turnos para evitar
        cancelaciones.
      </p>
      <p>
        Si necesitas cancelar un turno, hazlo con la mayor antelación posible
        para permitir que otros usuarios puedan tomar tu lugar.
      </p>
    </div>
  );
};

export default Tips;
