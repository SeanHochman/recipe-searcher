import { MakeRequest } from '../requestr';

// import * as flow from '../flow/actions';

const request = new MakeRequest({}).send;

export const dictionaryActions = {
  get: (data, options?, params?) => {
    return (dispatch, getState) => {
      request({
        api: data.url,
        ...data.options,
        ...options,
        ...data.params,
        ...params
      })(dispatch, getState);
    };
  }
};
