import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class HeaderComponent extends Component {
  componentWillMount(nexProps) {
    this.props.getLayout();
  }

  render() {
    const { titre } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/parici">parici</Link>
          </li>
        </ul>
        <h1>{titre}</h1>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  titre: PropTypes.string.isRequired,
  getLayout: PropTypes.func.isRequired
};

export default HeaderComponent;
