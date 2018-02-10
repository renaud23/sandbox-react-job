import { connect } from "react-redux";
import Login from "./../components/login-component";
import { login } from "./../auth/auth-actions";

const mapStateToProps = state => {
  const { token, isAuthenticated } = state.authReducer;
  const { loginError } = state.appReducer;
  return { token, isAuthenticated, loginError };
};

const mapDispatchToProps = dispatch => ({
  login: (user, password) => {
    dispatch(login("http://localhost:8443", user, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
