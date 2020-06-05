import React from "react";
import Ingresar from "./Ingresar";
import DrawerToggleButton from "./SideDrawer.js/DrawerToggleButton";
// import HeaderInnerLeft from "./HeaderInnerLeft";
// import Nav from "./Nav";

const Header = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar_logo">
          <a href="/">DAMASCUS</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="#Tipos-container" >Tipos</a>
            </li>
            <li>
              <a href="#Historia-container">Historia</a>
            </li>
            <li>
              <a href="#Manufactura">Manufactura</a>
            </li>
            <li>
              <a href="#Shop">Shop</a>
            </li>
          </ul>
        </div>
        <div className="spacer"></div>
        <Ingresar />
      </nav>
      
    </header>
  );
}

export default Header;
