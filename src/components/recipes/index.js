import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Grid } from 'react-flexbox-grid';

import RecipeCard from './RecipeCard';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  return { recipes };
};

const Recipes = ({ recipes }) => {
  const titleTags = recipes && `containing ${recipes.q.toUpperCase()}`;
  const recipeList =
    recipes &&
    recipes.hits.map((recipe, i) => {
      const entry = recipe.recipe;
      return (
        <Col key={`${entry.label}-${i}`} xs={4}>
          <RecipeCard recipe={entry} />
        </Col>
      );
    });
  return (
    <Col>
      <h1>Recipes {titleTags}</h1>
      <Row around="xs">{recipeList}</Row>
    </Col>
  );
};

export default connect(mapStateToProps)(Recipes);
