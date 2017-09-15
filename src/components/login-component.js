import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.redirect = null;
  }

  handleClick() {
    this.props.login(this.refs.user.value, this.refs.password.value);
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      this.props.login(this.refs.id.value, this.refs.password.value);
    }
  }

  render() {
    const { history, isAuthenticated, location, loginError } = this.props;
    if (isAuthenticated) {
      if (this.props.location.state && this.props.location.state.from && this.props.location.state.from.pathname != "/login") {
        return <Redirect to={this.props.location.state.from.pathname} />;
      } else {
        return <Redirect to="/" />;
      }
    } else {
      const loginErrorDom = loginError ? <div className="login-error">{loginError}</div> : null;
      return (
        <div className="login">
          {loginErrorDom}
          <label>
            user:
            <input type="text" ref="user" />
          </label>
          <label>
            Password:
            <input type="password" ref="password" onKeyPress={this.handleKeyPress} />
          </label>
          <input type="button" value="login" onClick={this.handleClick} />
        </div>
      );
    }
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Login;
