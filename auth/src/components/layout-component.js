import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./layout.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./accueil-component";
import ParIci from "./parici-component";
import Login from "./../containers/login-container";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getLayout();
  }

  render() {
    const { titre, children } = this.props;
    return (
      <Router>
        <div className="layout">
          <ul>
            <li>
              <Link to="/">accueil</Link>
            </li>
            <li>
              <Link to="/parici">parici</Link>
            </li>
          </ul>
          <h1>{titre}</h1>
          <Route exact path="/" component={Accueil} />
          <Route path="/parici" component={ParIci} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

Layout.propTypes = {
  titre: PropTypes.string.isRequired,
  getLayout: PropTypes.func.isRequired
};

export default Layout;
