import logo from "./logo.svg";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado/MiPrimerEstado";
import React from "react";
import { Ejercicio01 } from "./components/ejercicio01/Ejercicio01";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiPrimerEstado />
        <Ejercicio01/>
      </header>
    </div>
  );
}

export default App;
