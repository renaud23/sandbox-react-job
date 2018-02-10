import * as actions from "./../actions/action";
export default (state = { returns: null }, action) => {
  switch (action.type) {
    case actions.ASYNC_LOADED: {
      return { ...state, returns: action.returns };
    }
    default:
      return state;
  }
};
