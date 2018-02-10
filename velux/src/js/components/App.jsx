import React, { Component } from "react";
import Hello from "./../conteneurs/hello-conteneur";
import Journal from "./../conteneurs/journal-conteneur";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Velux</h1>
        <Hello />
        <Journal />
      </div>
    );
  }
}

export default App;
