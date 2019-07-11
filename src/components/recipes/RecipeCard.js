import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { CardContainer, CardImage } from './styled';

const RecipeCard = ({ recipe }) => {
  console.log({ recipe });
  return (
    <CardContainer>
      <CardImage image={recipe.image} />
      {recipe.label}
    </CardContainer>
  );
};

export default RecipeCard;
