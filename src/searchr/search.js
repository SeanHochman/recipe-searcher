import axios from 'axios';
import { urlMapping } from '../dictionaries/recipe';
import { mergeDeepRight } from 'ramda';
import { actionTypes } from '../actions/types';

export const urlCreator = (url, params = {}, extras = {}, options = {}) =>
  urlMapping[url](url, params, extras);

export default class searchManager {
  constructor(requestObject, options) {
    this.requestObject = requestObject;
    this.options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      ...options
    };
  }

  send = request => async (dispatch, getState) => {
    const merged = mergeDeepRight(this.requestObject, request);

    const {
      api = this.options.url,
      method = this.options.method,
      headers = this.options.headers,
      key = this.options.key,
      params,
      extras,
      ...options
    } = merged;

    const apiUrl = urlCreator(api, params, extras, options);
    const resp = await axios({
      url: apiUrl,
      key: key,
      method,
      headers
    });
    if (resp) {
      dispatch({
        type: actionTypes.SET_SEARCH_RESULTS,
        payload: { result: resp }
      });
    }
  };
}
