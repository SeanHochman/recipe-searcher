import React from 'react';
import { Row, Column, Grid } from 'react-flexbox-grid';

import Header from '../header';
import Recipes from '../recipes';
import SearchBar from '../searchBar';

const Home = props => {
  return (
    <React.Fragment>
      <Header />
      <Grid fluid>
        <Row center="xs">
          <SearchBar />
        </Row>
        <Row center="xs">
          <Recipes />
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
