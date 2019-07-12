import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { pathEq, filter } from 'ramda';

import { RecipeContainer, RecipeImg, RecipeContent } from './styled';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  const { currentRecipe } = state.filtr;
  return { recipes, currentRecipe };
};

const Recipe = ({ recipes, currentRecipe }) => {
  if (recipes && currentRecipe) {
    const find = pathEq(['recipe', 'uri'], currentRecipe);
    const current = filter(find, recipes.hits)[0];
    const { recipe } = current;
    console.log({ recipe });
    return (
      <Row center="xs">
        <Col>
          <RecipeContainer>
            <h1>{recipe.label}</h1>
            <h5>{recipe.source}</h5>
            <Row between="xs">
              <Col>
                <RecipeImg>
                  <img src={recipe.image} />
                </RecipeImg>
              </Col>
              <Col>
                <RecipeContent>
                  <div>
                    Health Tags:{' '}
                    {recipe.healthLabels.map(label => `${label}`).join(', ')}
                  </div>
                </RecipeContent>
              </Col>
            </Row>
          </RecipeContainer>
        </Col>
      </Row>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default connect(mapStateToProps)(Recipe);
