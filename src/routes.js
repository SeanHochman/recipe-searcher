import React from 'react';
import { Route, Switch } from 'react-router';
import { Grid } from 'react-flexbox-grid';

import DefaultLayout from './layouts';
import Home from './components/home';
import Recipe from './components/recipe';
import SearchBar from './components/searchBar';

export default () => (
  <>
    <Switch>
      <DefaultLayout>
        <Grid fluid>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchBar} />
          <Route path="/recipe" component={Recipe} />
        </Grid>
      </DefaultLayout>
    </Switch>
  </>
);
