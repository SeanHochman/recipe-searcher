import { NewSearch } from '../searchr';

// import * as flow from '../flow/actions';

const search = new NewSearch({}).send;

export const dictionaryActions = {
  get: (data, options?, params?) => {
    return (dispatch, getState) => {
      search({
        api: data.url,
        ...data.options,
        ...options,
        ...data.params,
        ...params
      })(dispatch, getState);
    };
  }
};
