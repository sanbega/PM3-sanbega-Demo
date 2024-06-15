import React from "react";
import styles from "../MisTurnos/Stats.module.css";

const Stats = ({ total, active, canceled }) => {
  return (
    <div className={styles.stats}>
      <h2>Estadísticas Rápidas</h2>
      <p>Total de Turnos: {total}</p>
      <p>Turnos Activos: {active}</p>
      <p>Turnos Cancelados: {canceled}</p>
    </div>
  );
};

export default Stats;
