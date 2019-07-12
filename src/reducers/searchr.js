import { actionTypes } from '../actions/types';

export const INITIAL_STORAGE = {};

export const searchr = (state = INITIAL_STORAGE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_SEARCH_RESULTS:
      {
        const { result } = payload;
        if (result) {
          const recipes = result.data;
          return { ...state, recipes };
        }
      }
      break;
    default:
      return state;
  }
};
