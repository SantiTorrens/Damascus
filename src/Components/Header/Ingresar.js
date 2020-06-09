import React, { Component } from "react";

class Ingresar extends Component {
  state = {
    logginOpen: false,
  };

  loginToggleClickHandler = () => {
    this.setState((prevState) => {
      return { logginOpen: !prevState.logginOpen };
    });
  };

  render() {
    let login = "Login";
    if (this.state.logginOpen) {
      login = "LogOut";
    }
    return (
      <div className="Login">
        <a onClick={this.loginToggleClickHandler} href="#login">
          {login}
        </a>
      </div>
    );
  }
}

export default Ingresar;
