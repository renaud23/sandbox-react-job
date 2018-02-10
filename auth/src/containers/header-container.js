import { connect } from "react-redux";
import Header from "./../components/header-component";
import { getLayout } from "./../actions/app-actions";

const mapStateToProps = state => {
  const { titre } = state.appReducer;
  return { titre };
};

const mapDispatchToProps = dispatch => ({
  getLayout: () => {
    dispatch(getLayout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
