import React from "react";
import PropTypes from "prop-types";

export class Fournisseur extends React.Component {
  getChildContext() {
    return { magasin: this.props.magasin };
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

Fournisseur.childContextTypes = {
  magasin: PropTypes.object
};

Fournisseur.propTypes = {
  magasin: PropTypes.object.isRequired
};
