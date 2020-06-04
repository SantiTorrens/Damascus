import React from "react";
import Video from "./Video";

function Manufactura() {
  return (
    <section id="Manufactura">
      <div className="Manufactura-txt">
        <h1 className="Manufactura-title">Como se hace</h1>
        <h2>Algunos ejemplos de como hacer Acero Damasco:</h2>
        <p>
          El acero damasco se consigue de la aleación mediante fundición en
          forja de 2 aceros con diferente graduación de carbono, lo que permite que al ser expuestos a un ácido corrosivo 
          reaccionen de diferente manera (por su composición molecular), y así obtengan diferente color.
          </p>
        <div className="Video-container">
          <Video videoid="q72jqba4qe0" />
          <Video videoid="o3fOxAe1Rb4" />
        </div>
      </div>
    </section>
  );
}

export default Manufactura;
