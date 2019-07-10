import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { searchr } from './searchr';

export default history =>
  combineReducers({
    router: connectRouter(history),
    searchr
  });
