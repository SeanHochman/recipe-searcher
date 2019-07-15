import React from 'react';
import { Col } from 'react-flexbox-grid';

import RecipeCard from './RecipeCard';

const List = ({ recipes }) =>
  recipes.map((rec, i) => {
    const { recipe } = rec;
    return (
      <Col key={`${recipe.label}-${i}`} xs={4}>
        <RecipeCard recipe={recipe} />
      </Col>
    );
  });

export default List;
