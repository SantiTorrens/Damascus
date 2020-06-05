import React, { Component } from "react";
import "./index.css";

import "./Components/Styles/Body.css";
import "./Components/Styles/header.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SideDrawer from "./Components/Header/SideDrawer.js/SideDrawer";
import BackDrop from "./Components/BackDrop/BackDrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%", widht: "100%" }} className="App">
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
        {backDrop}
        <Header drawerClickHandler={this.drawerToggleClickHandler}  />
        <Main />
      </div>
    );
  }
}

export default App;
