import { baseUrl, apiKeys } from '../config';
import { composeParams } from '../helpers';
import { ResponseKeys } from '../constants/enum';

export const apiList = {
  recipeSearch: `${baseUrl}/search?q=`
};

export const recipeDictionary = {
  recipeSearch: {
    url: apiList.recipeSearch,
    options: {
      key: ResponseKeys.recipeSearch
    }
  }
};

export const urlMapping = {
  [apiList.recipeSearch]: (base, params, extras) =>
    `${base}${composeParams(params)}${apiKeys}&from=0&${composeParams(extras)}`
};
