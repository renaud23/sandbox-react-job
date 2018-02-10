import * as actions from "./../actions/action";
export default (state = { nom: "unknow" }, action) => {
  switch (action.type) {
    case actions.CHANGER_NOM: {
      return { ...state, nom: action.nom };
    }
    default:
      return state;
  }
};
