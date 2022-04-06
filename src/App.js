import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo"; // Componente

// Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  return (
    <section className="section-center">
      <div className="container">
        <button className="btn">
          Cambia
        </button>

        {/* Avendo importato il file data.js, ho passato con lo Spread Operator, ogni singolo elelemto di questo array di oggetti, all'interno del nostro componente Articolo */}
        <section className="article-section">
          {
            data.map(el => <Articolo key={el.id} {...el} />)
          }
        </section>
      </div>
    </section>
  );
}

export default App;

{/* A JSX comment */}