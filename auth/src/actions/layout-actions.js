import { getJson } from "./../fetch/fetch-api";
import { jsonLoaded } from "./commons-actions";

export const GET_LAYOUT = "__GET_LAYOUT__";

export const getLayout = () => (dispatch, getState) => {
  getJson("http://localhost:3000/layout").then(json => {
    dispatch(jsonLoaded(GET_LAYOUT, json));
  });
};
