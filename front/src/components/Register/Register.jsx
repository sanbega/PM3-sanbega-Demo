import React, { useState } from "react";
import axios from "axios";
import styles from "../Register/Register.module.css";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !birthdate ||
      !nDni ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        name,
        email,
        birthdate,
        nDni,
        username,
        password,
      });

      if (response.status === 201) {
        setMessage("Registro exitoso. ¡Bienvenido!");
        navigate("/Login");
      } else {
        setMessage("Error en el registro. Por favor, intente nuevamente.");
      }
    } catch (error) {
      setMessage(
        `Error en el registro: ${error.response?.data || error.message}`
      );
    }
  };

  const handleReturnClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.background}>
      <div className={styles.form}>
        <MdOutlineKeyboardReturn
          className={styles.returnIcon}
          onClick={handleReturnClick}
        />
        <h1>Registro de Usuario</h1>
        {message && <p className={styles.message}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Nombre"
          />

          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Email"
          />

          <label htmlFor="birthdate" className={styles.label}>
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Fecha de Nacimiento"
          />

          <label htmlFor="nDni" className={styles.label}>
            Número de DNI:
          </label>
          <input
            type="text"
            id="nDni"
            name="nDni"
            value={formData.nDni}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Número de DNI"
          />

          <label htmlFor="username" className={styles.label}>
            Nombre de Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Nombre de Usuario"
          />

          <label htmlFor="password" className={styles.label}>
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Contraseña"
          />

          <label htmlFor="confirmPassword" className={styles.label}>
            Confirmar Contraseña:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Confirmar Contraseña"
          />

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
