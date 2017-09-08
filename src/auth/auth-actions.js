import { postRequest } from "./../fetc/fetch-api";

export const AUTH_BASIC_LOGIN = "__AUTH_BASIC_LOGIN__";

export const login = (url, id, password) => (dispatch, getState) => {
  postRequest(url, { id, password }).then(json => {
    dispatch(jsonLoaded("AUTH", json));
  });
};
