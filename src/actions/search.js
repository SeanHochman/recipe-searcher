import { NewSearch } from '../searchr';

// import * as flow from '../flow/actions';

const search = new NewSearch({}).send;

export const dictionaryActions = {
  get: (data, options?, params?, extras?) => {
    return (dispatch, getState) => {
      search({
        api: data.url,
        ...data.options,
        ...options,
        ...data.params,
        ...params,
        ...data.extras,
        ...extras
      })(dispatch, getState);
    };
  }
};
