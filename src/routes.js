import React from 'react';
import { Route, Switch } from 'react-router';
import { Row, Grid } from 'react-flexbox-grid';

import DefaultLayout from './layouts';
import Home from './components/home';
import Recipe from './components/recipe';
import Other from './components/other';

export default () => (
  <>
    <Switch>
      <DefaultLayout>
        <Grid fluid>
          <Route exact path="/" component={Home} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/other" component={Other} />
        </Grid>
      </DefaultLayout>
    </Switch>
  </>
);
