import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.props.login(this.refs.id.value, this.refs.password.value);
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      this.props.login(this.refs.id.value, this.refs.password.value);
    }
  }

  render() {
    return (
      <div className="login">
        <label>
          Id:
          <input type="text" ref="id" />
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

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
