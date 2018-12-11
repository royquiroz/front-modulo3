import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router />
      </div>
    );
  }
}

export default App;
