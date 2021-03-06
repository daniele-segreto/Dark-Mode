import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo"; // Componente

// Funzione che se presente 'Theme' nel localStorage...
// ...returna il suo valore o di default return 'light-mode'
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {

  //Stato iniziale per la nostra modalità
  const [theme, setTheme] = useState(getFromLocalStorage());

  // Cambia il valore dello StateTtheme
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

    // Inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
    // primo parametro = nome che vogliamo associare la chiave
    // secondo parametro = quello che vogliamo passare a local storage, deve essere una stringa
    localStorage.setItem("theme", theme); 
  }, [theme]);
    

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