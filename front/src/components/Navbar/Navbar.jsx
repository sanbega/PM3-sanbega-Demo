import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
        <li>
          <Link to="/mis-turnos">Turnos</Link>
        </li>
        <li>
          <Link to="/HomeMisturnos">Crear Turnos</Link>
        </li>
      </ul>
    </nav>
  );
}
