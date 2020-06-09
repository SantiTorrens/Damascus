import React from "react";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "sideDrawer";
  if (props.show) {
    drawerClasses = "sideDrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <i className="fa fa-close close-button" onClick={props.click}></i>
      <ul>
        <li>
          <a href="/">Damascus</a>
        </li>
        <li>
          <a href="#Tipos-container" onClick={props.click}>
            Tipos
          </a>
        </li>
        <li>
          <a href="#Historia-container" onClick={props.click}>
            Historia
          </a>
        </li>
        <li>
          <a href="#Manufactura" onClick={props.click}>
            Manufactura
          </a>
        </li>
        <li>
          <a href="#Shop" onClick={props.click}>
            Shop
          </a>
        </li>
        <li>
          <a href="#Shop" onClick={props.click}>
            LogIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
