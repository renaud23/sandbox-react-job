import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Accueil, Page2 } from "js/components";
import { Navbar } from "js/redux/containers";
import authenticated from "js/auth";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="application">
        <header className="header">
          <div className="container">
            <h1>Essai Relay Modern</h1>
          </div>
        </header>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/accueil" component={Accueil} />
            <Route path="/page-2" component={Page2} />
            <Route path="/" render={() => <Redirect to="/accueil" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default authenticated()(App);
