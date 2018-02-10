export const CHANGER_NOM = "changer_nom";
export const ASYNC_LOADED = "async_loaded";

export const changerNom = nom => ({ type: CHANGER_NOM, nom });
export const asyncLoaded = returns => ({ type: ASYNC_LOADED, returns });

export const asyncAction = url => (dispatch, getState) => {
  fetch(`${process.env.REACT_APP_BACK_END_PATH}/public/templateOperations`)
    .then(response => response.json())
    .then(templates => {
      dispatch(asyncLoaded(templates));
    });
};
