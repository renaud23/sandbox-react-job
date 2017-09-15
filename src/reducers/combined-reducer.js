import { combineReducers } from "redux";
import appReducer from "./app-reducer";
import authReducer from "./../auth/auth-reducer";

const combinedReducers = combineReducers({
  appReducer,
  authReducer
});

export default combinedReducers;
