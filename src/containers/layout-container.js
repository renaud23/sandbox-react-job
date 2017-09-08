import { connect } from "react-redux";
import Layout from "./../components/layout-component";
import { getLayout } from "./../actions/layout-actions";

const mapStateToProps = state => {
  const { titre } = state.layoutReducer;
  return { titre };
};

const mapDispatchToProps = dispatch => ({
  getLayout: () => {
    dispatch(getLayout());
  }
});

const layoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default layoutContainer;
