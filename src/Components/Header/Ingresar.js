import React, { Component } from "react";

class Ingresar extends Component {
  state = {
    log: false,
  };
  clickHandler = () => {
    const doesLog = this.state.log;
    this.setState({ log: !doesLog });
  };

  render() {
    let login = "Login";
    if (this.state.log) {
      login = "LogOut";
    }
    return (
      <div className="Login">
        <a onClick={this.clickHandler} href="#login">
          {login}
        </a>
      </div>
    );
  }
}

export default Ingresar;
