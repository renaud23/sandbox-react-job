import { CHANGER_INDEX_NAVBAR } from "js/redux/actions";

const initial = { indexNavbar: 0 };

export default (state = initial, action) => {
  switch (action.type) {
    case CHANGER_INDEX_NAVBAR: {
      return { ...state, indexNavbar: action.index };
    }
    default:
      return state;
  }
};
