import { connect } from "react-redux";
import { Navbar } from "js/components";
import { changerIndexNavbar } from "js/redux/actions";

const stateToProps = state => {
  const { indexNavbar } = state.application;
  return { index: indexNavbar };
};

const dispatchToProps = dispatch => ({
  changeIndexNavbar: index => {
    dispatch(changerIndexNavbar(index));
  }
});

export default connect(stateToProps, dispatchToProps)(Navbar);
