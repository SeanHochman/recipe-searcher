import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { searchr } from './searchr';
import { filtr } from './filtr';
export default history =>
  combineReducers({
    router: connectRouter(history),
    searchr,
    filtr
  });
