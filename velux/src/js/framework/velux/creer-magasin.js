class Magasin {
  constructor(combined, middleWares) {
    this.combined = combined;
    this.previousStates = [];
    this.state = {};
    this.observers = [];
    this.compteur = 0;
    this.dispatch = this.dispatch.bind(this);
    if (typeof middleWares === "function") {
      middleWares(this);
    }
    this.dispatch({ type: "@@INIT" });
  }

  dispatch(action) {
    this.previousStates.push(this.state);
    this.state = this.combined(this.state, action);
    this.compteurState++;
    this.notifyAll();
  }

  getState() {
    return this.state;
  }

  addObserver(o) {
    if (o.notify) {
      this.observers.push(o);
    }
  }

  removeObserver(o) {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.slice(index, 1);
    }
  }

  getCompteurState() {
    return this.compteurState;
  }

  notifyAll() {
    this.observers.forEach(o => {
      o.notify(this.compteurState);
    });
  }
}

export const creerMagasin = (combined, middleWares) => {
  return new Magasin(combined, middleWares);
};
