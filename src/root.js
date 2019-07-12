import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components/theme';
import React from 'react';
import store, { history } from './store';

import Routes from './routes';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
