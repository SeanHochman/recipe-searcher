import React from 'react';
import { Row } from 'react-flexbox-grid';

import Recipes from '../recipesList';
import Recipe from '../recipe';
import Other from '../other';
import SearchBar from '../searchBar';

const Home = props => (
  <>
    <Row center="xs">
      <SearchBar />
    </Row>
    <Row center="xs">
      <Recipes />
    </Row>
  </>
);

export default Home;
