import { connect } from "react-redux";
import Accueil from "./../components/accueil-component";
import { getAccueilContent } from "./../actions/app-actions";

const mapStateToProps = state => {
  const { accueilContent } = state.appReducer;
  return { content: accueilContent };
};

const mapDispatchToProps = dispatch => ({
  getContent: () => {
    dispatch(getAccueilContent());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
