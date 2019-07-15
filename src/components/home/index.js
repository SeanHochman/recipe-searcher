import React from 'react';
import { Row, Grid } from 'react-flexbox-grid';

import Recipes from '../recipesList';
import Recipe from '../recipe';
import Other from '../other';
import SearchBar from '../searchBar';

const Home = props => {
  return (
    <Grid fluid>
      <Row center="xs">
        <SearchBar />
      </Row>
      <Row center="xs">
        <Recipes />
      </Row>
    </Grid>
  );
};

export default Home;
