import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //esto
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    return formData.username && formData.password;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setMessage("Por favor, complete todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );
      console.log("estoes ", response);
      dispatch(setUserData(formData));
      // dispatch(setUserData(response.data));
      setMessage("Ingreso exitoso");
      navigate("/mis-turnos");
      console.log(response.data);
    } catch (error) {
      // setMessage("Credenciales invalidas " + error.response.data);
      setMessage("Credenciales invalidas! ");
    }
  };

  const handleReturnClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.fondo}>
      <div className={styles.container}>
        <MdOutlineKeyboardReturn
          className={styles.returnIcon}
          onClick={handleReturnClick}
        />
        <header className={styles.header}>
          <h1> Turnos de Fútbol</h1>
        </header>
        <main className={styles.main}>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className={styles.button}>
                Ingresar
              </button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
          </div>
          <section className={styles.news}>
            <h2>Noticias de Fútbol</h2>
            <ul>
              <li>Partido de la semana: Equipo A vs. Equipo B</li>
              <li>Resultados de la jornada</li>
              <li>Entrevista con el jugador del mes</li>
            </ul>
          </section>
        </main>
        <footer className={styles.footer}>
          <p>
            &copy; 2024 Página de Turnos de Fútbol. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
