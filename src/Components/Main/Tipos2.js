import React from "react";

function Tipos2(props) {
  return (
    <div className="tipos2">
      <h4 className="tipos2-title">{props.name}</h4>
      <img className="tipos2-img" alt="err" src={props.img} />
      <p className="tipos2-p">{props.info}</p>
      <button className="vermas-btn">Ver más</button>
    </div>
  );
}

export default Tipos2;
