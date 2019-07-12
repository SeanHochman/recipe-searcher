import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getUri } from '../../actions/filter';

import { CardContainer, CardImage } from './styled';

const mapDispatchToProps = dispatch => ({
  onGetUri: bindActionCreators(getUri, dispatch)
});

const RecipeCard = ({ recipe, onGetUri }) => {
  const { label, calories, totalTime, uri } = recipe;

  const cookTime =
    totalTime !== 0 ? `Cook time: ${totalTime} minutes` : `Cook time: unknown`;

  return (
    <Link to="/recipe">
      <CardContainer onClick={() => onGetUri(uri)}>
        <CardImage image={recipe.image} />
        <div>{label}</div>
        <div>{calories.toFixed(2)} calories</div>
        <div>{cookTime}</div>
      </CardContainer>
    </Link>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeCard);
