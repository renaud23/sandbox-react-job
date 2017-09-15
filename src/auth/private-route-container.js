import { connect } from 'react-redux';
import PrivateRoute from './private-route-component';

const mapStateToProps = (state, ownProps) => {
  const { isAuthenticated } = state.authReducer;
  return Object.assign({}, ownProps, { isAuthenticated });
};

export default connect(mapStateToProps)(PrivateRoute);
