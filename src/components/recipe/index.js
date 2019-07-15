import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-flexbox-grid';
import { pathEq, filter } from 'ramda';

import {
  RecipeContainer,
  RecipeImg,
  RecipeContent,
  Ingredient,
  Ingredients
} from './styled';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  const { currentRecipe } = state.filtr;
  return { recipes, currentRecipe };
};

const Recipe = props => {
  const { recipes, currentRecipe } = props;

  if (recipes && currentRecipe) {
    const find = pathEq(['recipe', 'uri'], currentRecipe);
    const current = filter(find, recipes.hits)[0];
    const { recipe } = current;
    console.log({ recipe });
    return (
      <Grid fluid>
        <RecipeContainer>
          <h1>{recipe.label}</h1>
          <h5>{recipe.source}</h5>
          <Row>
            <RecipeImg>
              <img src={recipe.image} alt={recipe.label} />
            </RecipeImg>
            <RecipeContent>
              <b>Health Tags:</b>{' '}
              {recipe.healthLabels.map(label => `${label}`).join(', ')}
              <h3>Ingredients:</h3>
              <Ingredients>
                {recipe.ingredientLines.map((ing, i) => (
                  <Ingredient key={i}>{`${i + 1}) ${ing}`}</Ingredient>
                ))}
              </Ingredients>
            </RecipeContent>
          </Row>
        </RecipeContainer>
      </Grid>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default connect(mapStateToProps)(Recipe);
