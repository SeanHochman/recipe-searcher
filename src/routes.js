import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header';

import Home from './components/home';
import Recipe from './components/recipe';

export default () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe" component={Recipe} />
    </Switch>
  </React.Fragment>
);
