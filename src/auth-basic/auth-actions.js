import { postRequest } from "./../fetch/fetch-api";

export const AUTH_BASIC_LOGIN = "__AUTH_BASIC_LOGIN__";

export const login = (url, id, password) => (dispatch, getState) => {
  postRequest(url, { url, password }).then(json => {
    dispatch(jsonLoaded(GET_LAYOUT, json));
  });
};
