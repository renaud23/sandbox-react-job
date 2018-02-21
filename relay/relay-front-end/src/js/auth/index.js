import React from "react";
import Keycloak from "keycloak-js";
import { withRouter } from "react-router-dom";
import { setToken, getToken } from "js/api";
import PropTypes from "prop-types";

export { default as checkToken } from "./check-token";

export default conf => (Component: component) => {
  const utilisateur = { nom: null, prenom: null, roles: [] };
  const kc = Keycloak("./keycloak-configuration.json");

  class AuthenticatedComponent extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    getChildContext() {
      return { utilisateur };
    }

    componentWillMount() {
      this.initLogin();
    }

    initLogin() {
      const params = { responseMode: "query", checkLoginIframe: false };

      try {
        const token = getToken();
        params.token = token;
      } catch (e) {}

      kc.init(params).success(authenticated => {
        if (authenticated) {
          this.props.history.push(window.location.href.split("#")[1]);
          setToken(kc.token);
          utilisateur.nom = kc.idTokenParsed.family_name;
          utilisateur.prenom = kc.idTokenParsed.given_name;
        } else {
          kc.login({ idpHint: "keycloak-oidc" });
        }
      });
    }

    render() {
      return <Component {...this.props} utilisateur />;
    }
  }

  AuthenticatedComponent.childContextTypes = {
    utilisateur: PropTypes.shape({
      nom: PropTypes.string,
      prenom: PropTypes.string,
      roles: PropTypes.arrayOf(PropTypes.string)
    })
  };

  return withRouter(AuthenticatedComponent);
};
