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
  [apiList.recipeSearch]: (base, params) =>
    `${base}${composeParams(params)}${apiKeys}`
};
