import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Accueil extends Component {
  componentDidMount() {
    this.props.getContent();
  }

  componentWillUpdate(nexprops) {
    this.props.getContent();
  }

  render() {
    return (
      <div className="accueil">
        Bien le bonjour mon petit monsieur !!! <Link to="/parici">parici</Link>
      </div>
    );
  }
}

Accueil.propTypes = {
  content: PropTypes.string,
  getContent: PropTypes.func.isRequired
};

export default Accueil;
