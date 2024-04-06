import React from "react";

function Events() {
  const singleClick = (e, name) => {
    alert(`Haz dado click ${name}`);
  };
  const doubleClick = (e, name) => {
    alert(`Haz dado doble click ${name}`);
  };

  const mouseEnter = (e, action) =>{
    alert(`Has ${action} de la caja `)
  }

  const insideOfTheInput = () => {
    console.log(`Estas dentro del input `);
  };
  
  const outsideOfTheInput = () => {
    console.log(`Estas dentro del input `);
  };

  return (
    <>
      <section>
        <h2>Eventos en react</h2>
        <article>
          <h3>Click</h3>
          {/* <button onClick={singleClick("Jimmy")}> Click me!</button>  */}
          {/* si no la enlazamos al evento, esta se estara ejecutando de manera automatica */}
          <button onClick={(e) => singleClick(e, "Jimmy")}> Click me!</button>
        </article>
        <hr />

        <article>
          <h3>Doble Click</h3>
          {/* <button onClick={doubleClick("Jimmy")}> Click me twice!</button>  */}
          {/* si no la enlazamos al evento, esta se estara ejecutando de manera automatica */}
          <button onDoubleClick={(e) => doubleClick(e, "Jimmy")}>
            Click me twice!
          </button>
        </article>

        <article onMouseEnter={e => mouseEnter(e, "entrado")} onMouseLeave={e => mouseEnter(e, "salido")}>
          <h3>Mouse Enter/left</h3>
          <div id="caja">Caja dentro de la caja</div>
        </article>

        <article >
          <h3>Focus/ blur</h3>
          <input type="text" onFocus={insideOfTheInput} onBlur={outsideOfTheInput} />
        </article>
      </section>
    </>
  );
}

export default Events;
