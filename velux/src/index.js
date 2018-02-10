import React from "react";
import ReactDOM from "react-dom";
import App from "./js/components/App";
import registerServiceWorker from "./registerServiceWorker";
import { creerMagasin, appliquerMiddlewares } from "js/framework/velux";
import { Fournisseur } from "js/framework/react-velux";
import reducteurs from "js/reducteurs";
import "./index.css";

const reduxThunk = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const reduxLogger = store => next => action => {
  const result = next(action);
  console.log("dipatch", action, store.getState());
  return result;
};

const magasin = creerMagasin(reducteurs, appliquerMiddlewares(reduxThunk, reduxLogger));

ReactDOM.render(
  <Fournisseur magasin={magasin}>
    <App />
  </Fournisseur>,
  document.getElementById("root")
);
registerServiceWorker();
