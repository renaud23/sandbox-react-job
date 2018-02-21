import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { App } from "js/components";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "js/redux/reducers";
import { checkToken } from "js/auth";
import "./index.css";

let composeEx = compose;
if (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(reducers, composeEx(applyMiddleware(checkToken, thunk)));

const Bye = () => <div>Bye !</div>;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/bye" component={Bye} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
