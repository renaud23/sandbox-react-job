import authBasic from "./auth/auth-basic";

export const getJson = (url, callback) => {
  const headers = authBasic.getHeaders();
  headers.set("Content-Type", "application/json;charset=utf-8");
  headers.set("Accept", "application/json;charset=utf-8");
  return fetch(url, {
    method: "GET",
    headers: headers
  })
    .then(response => response.json())
    .catch(error => {
      console.error("wrong", url, error);
    });
};

export const postRequest = (url, body) => {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(body)
  };
  return fetch(url, config)
    .then(response => response.json())
    .catch(err => console.error("Error: ", err));
};
