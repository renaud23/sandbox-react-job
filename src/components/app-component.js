import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./app-component.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./../containers/accueil-container";
import ParIci from "./parici-component";
import Login from "./../containers/login-container";
import PrivateRoute from "./../auth/private-route-container";
import Header from "./../containers/header-container";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titre, children } = this.props;
    return (
      <Router>
        <div className="app">
          <PrivateRoute path="/" component={Header} />
          <Switch>
            <PrivateRoute exact path="/" component={Accueil} />
            <PrivateRoute path="/parici" component={ParIci} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
