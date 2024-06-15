import React from "react";
import styles from "../../components/MisTurnos/Turno.module.css";

const Turno = ({ id, userId, date, time, status, description }) => {
  return (
    <div className={styles.turno}>
      <h3>Turno ID: {id}</h3>
      <p>User ID: {userId}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Estado: {status ? "Activa" : "Cancelada"}</p>
      <p>Descripcion: {description}</p>
    </div>
  );
};

export default Turno;
