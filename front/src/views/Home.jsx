import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HomeFooter from "../components/Home/HomeFooter";
import Faq from "../components/Home/Faq";
import styles from "../views/Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Login");
  };
  const handleButtonClickRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.homeContainer}>
      {/* <Navbar /> */}
      <div className={styles.content}>
        <h1>Bienvenido al Mundo del Fútbol</h1>
        <p>Explora las últimas noticias, partidos y jugadores destacados</p>
        <p>Agenda tus turnos!</p>

        <div className={styles.buttonContainer}>
          <button
            onClick={handleButtonClick}
            type="submit"
            className={styles.button}
          >
            Ingresar!
          </button>
          <span className={styles.buttonSpace}></span>
          <button
            onClick={handleButtonClickRegister}
            type="submit"
            className={styles.button}
          >
            Registrame!
          </button>
        </div>
      </div>
      <Faq />
      <div className={styles.space}></div>
      <HomeFooter />
    </div>
  );
}
