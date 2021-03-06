import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { pathEq, filter } from 'ramda';

import {
  RecipeTitle,
  RecipeContainer,
  RecipeImg,
  RecipeContent,
  Ingredient,
  Ingredients,
  Back
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
      <>
        <RecipeContainer>
          <RecipeTitle>{recipe.label}</RecipeTitle>
          <h5>{recipe.source}</h5>

          <Row>
            <Col xs={4}>
              <RecipeImg image={recipe.image} />
            </Col>
            <Col xs={8}>
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
            </Col>
          </Row>
        </RecipeContainer>
        <Back to="/search">Back</Back>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default connect(mapStateToProps)(Recipe);
