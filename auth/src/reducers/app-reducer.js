import { JSON_LOADED } from "./../actions/commons-actions";
import { GET_LAYOUT, GET_ACCUEIL_CONTENT } from "./../actions/app-actions";
import { LOGIN_FAILURE } from "./../auth/auth-actions";

const initial = {
  titre: "titre par défaut issu de reducer layout",
  loginError: null,
  accueilContent: null
};

export default (state = initial, action) => {
  switch (action.type) {
    case LOGIN_FAILURE: {
      return Object.assign({}, state, { loginError: "Echec de l'authentification" });
    }
    case JSON_LOADED: {
      if (action.owner === GET_LAYOUT) {
        const { titre } = action.json;
        return Object.assign({}, state, { titre, logginError: null });
      } else if (action.owner === GET_ACCUEIL_CONTENT) {
        const { content } = action.json;
        return Object.assign({}, state, { content, logginError: null });
      }
    }
    default:
      return state;
  }
};
