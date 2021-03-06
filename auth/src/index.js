import "babel-polyfill";
import "isomorphic-fetch";

import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { Promise } from "es6-promise";
import ReactDOM from "react-dom";
import React from "react";
import App from "./containers/app-container";
import reducers from "./reducers/combined-reducer";

Promise.polyfill();
// window.sessionStorage.clear();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("application"));
