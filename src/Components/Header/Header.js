import React from "react";
import Ingresar from "./Ingresar";
import HeaderInnerLeft from "./HeaderInnerLeft";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header-container">
      <div id="header">
        <HeaderInnerLeft />
        <div className="navigator">
          <Nav name="Tipos" />
          <Nav name="Historia" />
          <Nav name="Manufactura" />
          <Nav name="Shop" />
        </div>
        <Ingresar />
      </div>
    </div>
  );
}

export default Header;
