import React from "react";
import "./App.css";
import "./Components/Styles/Body.css";
import "./Components/Styles/header.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
