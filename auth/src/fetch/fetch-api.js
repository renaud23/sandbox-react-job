import { SESSION_ITEM } from "./../auth/auth-actions";
import { connectionException } from "./../auth/auth-exceptions";

export const getJson = url => {
  const headers = authJwt.getHeaders();
  headers.set("Content-Type", "application/json;charset=utf-8");
  headers.set("Accept", "application/json;charset=utf-8");
  return fetch(url, {
    method: "GET",
    headers: headers
  })
    .then(response => {
      if (response.status === 401) {
        const msg = response.json();
        throw new connectionException("Echec connection : Unauthorized");
      } else {
        return response.json();
      }
    })
    .catch(e => {
      throw e;
    });
};

export const postJson = (url, json) => {
  const headers = new Headers();
  headers.set("Content-Type", "application/json;charset=utf-8");
  headers.set("Accept", "application/json;charset=utf-8");
  let config = {
    method: "POST",
    headers,
    body: JSON.stringify(json)
  };
  return fetch(url, config)
    .then(response => {
      if (response.status === 401) {
        throw new connectionException("Echec connection : Unauthorized");
      } else {
        return response.json();
      }
    })
    .catch(e => {
      throw e;
    });
};

/**
* Version minimale, pas ici
*
*/
const authJwt = {
  getHeaders: () => {
    const headers = new Headers();
    const token = window.sessionStorage.getItem(SESSION_ITEM);
    headers.set("Authorization", `Bearer ${token}`);

    return headers;
  }
};
