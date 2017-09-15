import { JSON_LOADED } from "./..//actions/commons-actions";
import { LOGIN_SUCCESS, SESSION_ITEM, SESSION_EXPIRED } from "./auth-actions";

const token = window.sessionStorage.getItem(SESSION_ITEM);
const initial = {
  isAuthenticated: token ? true : false,
  user: null
};

export default (state = initial, action) => {
  switch (action.type) {
    case SESSION_EXPIRED: {
      window.sessionStorage.removeItem(SESSION_ITEM);
      return Object.assign({}, state, { isAuthenticated: false, user: null });
    }
    case JSON_LOADED: {
      if (action.owner === LOGIN_SUCCESS) {
        return Object.assign({}, state, { isAuthenticated: true, user: action.user });
      }
    }

    default:
      return state;
  }
};
