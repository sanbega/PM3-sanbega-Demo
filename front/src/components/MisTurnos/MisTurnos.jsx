import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../MisTurnos/MisTurnos.module.css";
import NavigationTurnos from "../NavigationTurnos/NavigationTurnos";
import Tips from "./Tips";
import Feedback from "./Feedback";
import Stats from "./Stats";
import WelcomeMessage from "./WelcomeMessage";
import { GrUpdate } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";

const MisTurnos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login, user } = useSelector((state) => state.actualUser.userData);
  const turnos = useSelector((state) => state.actualUser.userAppointments);
  const [turnosState, setTurnosState] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    } else {
      const fetchTurns = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/turns/${user?.id}`
          );
          dispatch(setUserAppointments(response.data));
          console.log("asd", response.data);
          setTurnosState(response.data || []);
          // setTurnosState(response.data);
        } catch (error) {
          console.error("Error fetching turns:", error);
        }
      };

      fetchTurns();
    }
  }, [login, navigate, user?.id, dispatch]);

  const handleStatusClick = async (turno) => {
    if (turno.status) {
      try {
        await axios.put(`http://localhost:3000/turns/cancel/${turno.id}`, {
          ...turno,
          status: false,
        });
        setTurnosState((prevState) =>
          prevState.map((t) =>
            t.id === turno.id ? { ...t, status: false } : t
          )
        );
      } catch (error) {
        console.error("Error updating turn status:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <NavigationTurnos />
      <WelcomeMessage />

      <Stats
        total={turnosState.length}
        active={turnosState.filter((turno) => turno.status).length}
        canceled={turnosState.filter((turno) => !turno.status).length}
      />
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <h1>Mis Turnos</h1>
          <IoIosAddCircle
            className={styles.addIcon}
            onClick={() => navigate("/HomeMisTurnos")}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {turnos.length > 0 ? (
              turnos.map((turno) => (
                <tr key={turno.id}>
                  <td>{turno.id}</td>
                  <td>{turno.userId}</td>
                  <td>{turno.date}</td>
                  <td>{turno.time}</td>
                  <td>
                    {turno.status ? (
                      <span
                        className={styles.status}
                        onClick={() => handleStatusClick(turno)}
                        style={{ cursor: "pointer" }}
                      >
                        Activa <GrUpdate />
                      </span>
                    ) : (
                      <span className={styles.status}>Cancelada</span>
                    )}
                  </td>
                  <td>{turno.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.noTurns}>
                  No hay turnos agendados para este usuario.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Tips />
      <Feedback />
    </div>
  );
};

export default MisTurnos;
