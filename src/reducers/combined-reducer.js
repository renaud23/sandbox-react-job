import { combineReducers } from "redux";
import layoutReducer from "./layout-reducer";
import authBasicReducer from "./../auth-basic/auth-reducer";

const combinedReducers = combineReducers({
  layoutReducer,
  authBasicReducer
});

export default combinedReducers;
