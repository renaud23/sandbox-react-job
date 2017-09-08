import { connect } from "react-redux";
import Login from "./../components/login-component";
import { login } from "./../auth-basic/auth-actions";

const mapDispatchToProps = dispatch => ({
	login: (id, password) => {
		dispatch(login("http://localhost:8443", id, password));
	}
});

export default connect(undefined, mapDispatchToProps)(Login);
