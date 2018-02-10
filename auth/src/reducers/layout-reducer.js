import { JSON_LOADED } from "./../actions/commons-actions";
import { GET_LAYOUT } from "./../actions/layout-actions";

const initial = {
  titre: "titre par défaut issu de reducer layout"
};

const layoutReducer = (state = initial, action) => {
  switch (action.type) {
    case JSON_LOADED: {
      if (action.owner === GET_LAYOUT) {
        const { titre } = action.json;
        return Object.assign({}, state, { titre });
      }
    }
    default:
      return state;
  }
};

export default layoutReducer;
