import React from 'react';
import { connect } from 'react-redux';
import List from './List';

import { Title, Wrapper } from './styled';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  return { recipes };
};

const Recipes = ({ recipes }) => {
  const titleTags = recipes && (
    <Title>{`Recipes containing ${recipes.q.toUpperCase()}`}</Title>
  );

  return (
    <Wrapper>
      {titleTags}
      {recipes && <List recipes={recipes.hits} />}
    </Wrapper>
  );
};

export default connect(mapStateToProps)(Recipes);
