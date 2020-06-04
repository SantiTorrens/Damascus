import React, { Component } from "react";

class Ingresar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
   const doesLog = this.state.log;
   this.setState({log: !doesLog})

  
  };

  render() {
    let login = "Login";
    if(this.state.log){
      login = "LogOut"
    }
    return (
      <div className="Login">
        <a onClick={this.clickHandler} href="#login">{login}</a>
      </div>
    )
  }
}

export default Ingresar;
