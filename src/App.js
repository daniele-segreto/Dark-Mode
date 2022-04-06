import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo"; // Componente

function App() {

  //Stato iniziale per la nostra modalità
  const [theme, setTheme] = useState('light-mode');

  // Cambia il valore dello StaateTtheme
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    // Al mutare del theme state, attacca classe al html tag
    document.documentElement.className = theme;
    },[theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={cambiaTema}>
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