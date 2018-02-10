<<<<<<< HEAD:auth/src/auth-basic/auth-actions.js
import { postRequest } from './../fetch/fetch-api';
=======
import { postJson } from "./../fetch/fetch-api";
import { jsonLoaded } from "./../actions/commons-actions";
>>>>>>> 0cb94d7e30f44fe5753cdfae8c096b088310592b:src/auth/auth-actions.js

export const AUTH_LOGIN = "__AUTH_LOGIN__";

<<<<<<< HEAD:auth/src/auth-basic/auth-actions.js
export const login = (url, id, password) => (dispatch, getState) => {
  postRequest(url, { id, password }).then((json) => {
    dispatch(jsonLoaded(GET_LAYOUT, json));
  });
=======
export const LOGIN_FAILURE = "__LOGIN_FAILURE__";
export const LOGIN_SUCCESS = "__LOGIN_SUCCESS__";
export const SESSION_EXPIRED = "__LOGIN_EXPIRED__";

export const SESSION_ITEM = "__SESSION_ITEM__";

export const login = (url, user, password) => (dispatch, getState) => {
  const token = window.sessionStorage.getItem(SESSION_ITEM);
  if (token) {
    dispatch(jsonLoaded(AUTH_LOGIN, { token }));
  } else {
    postJson(url, { user, password })
      .then(json => {
        if (json) {
          window.sessionStorage.setItem(SESSION_ITEM, json.token);
          dispatch(jsonLoaded(LOGIN_SUCCESS, Object.assign(json, { user })));
        }
      })
      .catch(e => {
        if (e.status && (e.status === 401 || e.status === 403)) {
          dispatch(loginFailure());
        }
      });
  }
>>>>>>> 0cb94d7e30f44fe5753cdfae8c096b088310592b:src/auth/auth-actions.js
};

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const sessionExpired = () => ({
  type: SESSION_EXPIRED
});
