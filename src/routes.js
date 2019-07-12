import React from 'react';
import { Route, Switch } from 'react-router';

import DefaultLayout from './layouts';
import Home from './components/home';
import Recipe from './components/recipe';
import Other from './components/other';

export default () => (
  <React.Fragment>
    <Switch>
      <DefaultLayout>
        <Route exact path="/" component={Home} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/other" component={Other} />
      </DefaultLayout>
    </Switch>
  </React.Fragment>
);
