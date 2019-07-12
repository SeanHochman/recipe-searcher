import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import RecipeList from './RecipeList';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  return { recipes };
};

const Recipes = ({ recipes }) => {
  const titleTags = recipes && `containing ${recipes.q.toUpperCase()}`;
  return (
    <Col>
      <h1>Recipes {titleTags}</h1>
      <Row>
        <RecipeList />
      </Row>
    </Col>
  );
};

export default connect(mapStateToProps)(Recipes);
