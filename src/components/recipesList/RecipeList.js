import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-flexbox-grid';

import RecipeCard from './RecipeCard';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  return { recipes };
};

const RecipeList = ({ recipes }) =>
  recipes
    ? recipes.hits.map((recipe, i) => {
        const entry = recipe.recipe;
        return (
          <Col key={`${entry.label}-${i}`} xs={4}>
            <RecipeCard recipe={entry} />
          </Col>
        );
      })
    : null;

export default connect(mapStateToProps)(RecipeList);
