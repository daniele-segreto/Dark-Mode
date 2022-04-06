import React from "react";

// Decostruzione dell'oggetto | Prendo gli elementi che mi servono da data.js
const Articolo = ({ body, title }) => {
  return (
    <article>
      <div style={{ position: "relative", height: "fit-content" }}>
        <h4> {title} </h4>
        <div className="underline"></div>
      </div>
      <p> {body}</p>
    </article>
  );
};

export default Articolo;