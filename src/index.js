import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import history from './history';
import Root from './root';

const el = document.getElementById('root');

ReactDOM.render(<Root />, el);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./root', () => {
      /* eslint-disable global-require */
      const NextRoot = require('./root').default;
      /* eslint-enable global-require */

      ReactDOM.render(<NextRoot store={store} history={history} />, el);
    });
  }
}
