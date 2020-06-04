import React from "react";

function Nav(props) {
  const name = props.name
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <a href='#.'name>{name}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
