export const combinerReduteurs = (params = {}) => {
  return Object.keys(params)
    .map(key => ({ key, reducer: params[key] }))
    .reduce(
      (acc, curr) => {
        const { reducer, key } = curr;
        return (state, action) => {
          state = { ...state, [key]: reducer(state[key], action) };
          return acc(state, action);
        };
      },
      (state, action) => {
        return state;
      }
    );
};
