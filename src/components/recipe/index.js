import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { pathEq, filter } from 'ramda';

import { RecipeContainer, RecipeImg } from './styled';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  const { currentRecipe } = state.filtr;
  return { recipes, currentRecipe };
};

const Recipe = ({ recipes, currentRecipe }) => {
  if (recipes) {
    const find = pathEq(['recipe', 'uri'], currentRecipe);
    const current = filter(find, recipes.hits)[0];
    const { recipe } = current;
    console.log({ recipe });
    return (
      <Grid fluid>
        <Row center="xs">
          <Col>
            <RecipeContainer>
              <h1>{recipe.label}</h1>
              <div>
                <RecipeImg image={recipe.image} />
                blablablabla
              </div>
              <div>{recipe.source}</div>
            </RecipeContainer>
          </Col>
        </Row>
      </Grid>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default connect(mapStateToProps)(Recipe);
