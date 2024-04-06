import React from "react";
import { useState } from "react";

export const MiPrimerEstado = () => {
  const [name, setName] = useState("Jimmy");
  
  const newName = (e, name) => {
    setName("Pedro")
  }

  const changeName = (e, name) =>{
    setName(name);
  }
  return (
    <div>
      <h2>Mi Primer Estado</h2>
      <h3>{name}</h3>
      <button onClick={newName}> Cambiar nombre por: Pedro </button>
      <button>Cambiar mi nombre por:</button>
      <input type="text" onChange={e => changeName(e, e.target.value ) } placeholder="Cambia el nombre" />
    </div>
  );
};
