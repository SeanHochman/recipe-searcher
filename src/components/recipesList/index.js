import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import List from './List';

import { Title } from './styled';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  return { recipes };
};

const Recipes = ({ recipes }) => {
  const titleTags = recipes && (
    <Title>{`Recipes containing ${recipes.q.toUpperCase()}`}</Title>
  );

  return (
    <Col>
      {titleTags}
      <Row>{recipes && <List recipes={recipes.hits} />}</Row>
    </Col>
  );
};

export default connect(mapStateToProps)(Recipes);
