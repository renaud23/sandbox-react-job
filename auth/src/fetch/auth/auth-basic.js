const auth = {};

auth.getHeaders = () => {
  const headers = new Headers();
  headers.set("Authorization", "Basic");

  return headers;
};

export default auth;
