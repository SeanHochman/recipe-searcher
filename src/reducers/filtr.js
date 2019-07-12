import { actionTypes } from '../actions/types';

export const INITIAL_STORAGE = {
  currentRecipe: {}
};

export const filtr = (state = INITIAL_STORAGE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FILTER_RESULT:
      {
        const uri = payload.uri;
        if (payload) {
          return { ...state, currentRecipe: uri };
        }
      }
      break;
    default:
      return state;
  }
};
