import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './components/home';

export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Fragment>
);
