import "babel-polyfill";
import "isomorphic-fetch";
import { Promise } from "es6-promise";
import ReactDOM from "react-dom";
import React from "react";
import Layout from "./containers/layout-container";
import reducers from "./reducers/combined-reducer";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

Promise.polyfill();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <Layout />
  </Provider>
);

ReactDOM.render(app, document.getElementById("application"));
