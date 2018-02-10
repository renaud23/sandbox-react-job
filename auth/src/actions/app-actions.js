import { getJson } from "./../fetch/fetch-api";
import { jsonLoaded } from "./commons-actions";
import { sessionExpired } from "./../auth/auth-actions";

export const GET_LAYOUT = "__GET_LAYOUT__";
export const GET_ACCUEIL_CONTENT = "__GET_ACCUEIL_CONTENT__";

export const getLayout = () => (dispatch, getState) => {
  applicationAuth(getJson("http://localhost:3000/layout"), dispatch).then(json => {
    if (json) {
      dispatch(jsonLoaded(GET_LAYOUT, json));
    }
  });
};

export const getAccueilContent = () => (dispatch, getState) => {
  applicationAuth(getJson("http://localhost:3000/accueil"), dispatch).then(json => {
    if (json) {
      dispatch(jsonLoaded(GET_ACCUEIL_CONTENT, json));
    }
  });
};

const applicationAuth = (promise, dispatch) =>
  promise.catch(e => {
    if (e.status === 401) {
      dispatch(sessionExpired());
    } else if (e.status === 403) {
      console.log("status", e);
    } else {
      //TODO
    }
  });
