import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const logger = createLogger({
  collapsed: true
});

const setMiddleware = () => {
  return applyMiddleware(thunk, routerMiddleware(history), logger);
};

const store = createStore(createRootReducer(history), compose(setMiddleware()));

if (module.hot) {
  module.hot.accept('../reducers/index', () => {
    /* eslint-disable global-require */
    const nextReducer = require('../reducers/index').default;
    /* eslint-enable global-require */
    store.replaceReducer(nextReducer(history));
  });
}

export default store;
