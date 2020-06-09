import React, { Component } from "react";

import "./index.css";
import "./Components/Styles/Body.css";
import "./Components/Styles/header.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SideDrawer from "./Components/Header/SideDrawer.js/SideDrawer";
import Footer from './Components/Footer/Footer'
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
    return (
      <div style={{ height: "100%", widht: "100%" }} className="App">
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
        <Header click={this.backDropClickHandler} drawerClickHandler={this.drawerToggleClickHandler}  />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
