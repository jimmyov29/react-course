import logo from "./logo.svg";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MiPrimerEstado />
      </header>
    </div>
  );
}

export default App;
