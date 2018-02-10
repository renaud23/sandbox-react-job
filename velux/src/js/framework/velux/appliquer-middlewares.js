export default (...middlewares) => {
  return store => {
    middlewares = middlewares.slice();
    middlewares.reverse();
    let dispatch = store.dispatch;
    middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
    store.dispatch = dispatch;
  };
};
