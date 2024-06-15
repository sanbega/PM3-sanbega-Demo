import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./views/Home";
import MisTurnos from "./components/MisTurnos/MisTurnos";
import Register from "./components/Register/Register";
import HomeMisTurnos from "./components/MisTurnos/HomeMisTurnos";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mis-turnos" element={<MisTurnos />} />
        <Route path="/HomeMisturnos" element={<HomeMisTurnos />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
