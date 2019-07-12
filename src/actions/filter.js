import { actionTypes } from './types';

export const getUri = uri => ({
  type: actionTypes.FILTER_RESULT,
  payload: { uri: uri }
});
