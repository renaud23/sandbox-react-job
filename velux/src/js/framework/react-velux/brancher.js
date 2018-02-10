import React, { Component } from "react";
import PropTypes from "prop-types";

export const brancher = (mapStateToProps, mapDispatchToProps) => (Composant: component) => {
  class Connect extends Component {
    constructor(props) {
      super(props);
      this.state = { compteurState: -1 };
    }

    componentWillMount() {
      if (this.context.magasin) {
        this.context.magasin.addObserver(this);
        this.setState({ compteurState: this.context.magasin.getCompteurState() });
      }
    }

    componentWillUnmount() {
      if (this.context.magasin) {
        this.context.magasin.removeObserver(this);
      }
    }

    notify(compteurState) {
      if (this.context.magasin) {
        this.setState({ compteurState: this.context.magasin.getCompteurState() });
      }
    }

    render() {
      const props = mapStateToProps(this.context.magasin.getState());
      const dispatch = mapDispatchToProps(this.context.magasin.dispatch);
      return <Composant {...this.props} {...dispatch} {...props} />;
    }
  }

  Connect.contextTypes = {
    magasin: PropTypes.object
  };

  return Connect;
};
