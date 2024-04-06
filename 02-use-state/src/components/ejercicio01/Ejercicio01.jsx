import React from 'react'
import { useState } from 'react'

export const Ejercicio01 = () => {
  const date = new Date()
  const year = date.getFullYear()

  const [actualYear, setActualYear] = useState(year);

  const aumentar = () =>{
    setActualYear(actualYear+1)
  }

  const disminuir = () =>{
    if(actualYear > 0){
        setActualYear(actualYear-1)
        
    }else{
        return
    }
  }

  const writeYear= (newYear) => {
    if (parseInt(newYear)) {
      setActualYear(newYear);
    } else {
      setActualYear(year);
    }
  }

    return (
      <div>
        <h2>Actual year: {actualYear}</h2>
        <article>
          <button onClick={aumentar}>aumentar</button>
          <button onClick={disminuir}>desaumentar</button>
          <input onChange={(e)=>writeYear(e.target.value) } placeholder='Write the year' />
        </article>
      </div>
    );
}
