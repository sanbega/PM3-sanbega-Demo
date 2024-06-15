import React from "react";
import styles from "../Home/HomeFooter.module.css";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HomeFooter = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2024 Página de Turnos de Fútbol. Todos los derechos reservados.
      </p>
      <div className={styles.socialIcons}>
        <a href="https://github.com/tuusuario">
          <FaGithub className={styles.icon} />
        </a>
        <a href="mailto:tuemail@gmail.com">
          <SiGmail className={styles.icon} />
        </a>
        <a href="https://instagram.com/tuinstagram">
          <FaInstagramSquare className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default HomeFooter;
