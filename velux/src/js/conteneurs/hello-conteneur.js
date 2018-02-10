import { brancher } from "js/framework/react-velux";
import Hello from "./../components/hello";
import * as actions from "js/actions";

const stateToProps = state => {
  const { nom } = state.app;
  return { nom };
};

const dispatchToProps = dispatch => ({
  changerNom: nom => {
    dispatch(actions.changerNom(nom));
  },
  asyncAction: () => {
    dispatch(actions.asyncAction());
  }
});

export default brancher(stateToProps, dispatchToProps)(Hello);
