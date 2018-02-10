import { brancher } from "js/framework/react-velux";
// import * as actions from "js/actions";
import Journal from "./../components/journal";

const props = state => ({
  returns: state.journal.returns
});
const disp = dispatch => ({});

export default brancher(props, disp)(Journal);
