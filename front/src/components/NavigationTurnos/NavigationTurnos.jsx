import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavigationTurnos/NavigationTurnos.module.css";

const NavigationTurnos = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link
            to="https://www.futbolred.com/futbol-colombiano/liga-betplay/tres-jugadores-se-irian-de-santa-fe-luego-de-final-liga-i-2024-posibilidad-en-mercado-de-fichajes-213706"
            className={styles.navbarLink}
          >
            Deportes
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="https://www.tuboleta.com/" className={styles.navbarLink}>
            Eventos Deportvos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTurnos;
