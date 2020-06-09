import React from "react";

import "../Styles/Body.css";

import Tipos from "./Tipos";
import Historia from "./Historia";
import Manufactura from "./Manufactura";
import Shop from "./Shop";


function Main() {
  return (
    <div className="Main-container">
      <Tipos />
      <Historia />
      <Manufactura />
      <Shop />
    </div>
  );
}

export default Main;
