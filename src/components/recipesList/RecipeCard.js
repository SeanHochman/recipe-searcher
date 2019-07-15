import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getUri } from '../../actions/filter';

import { CardContainer, CardImage } from './styled';

const mapDispatchToProps = dispatch => ({
  onGetUri: bindActionCreators(getUri, dispatch)
});

const RecipeCard = ({ recipe, onGetUri }) => {
  const { label, calories, totalTime, uri, image } = recipe;

  const cookTime =
    totalTime !== 0 ? `Cook time: ${totalTime} minutes` : `Cook time: unknown`;

  return (
    <NavLink to="/recipe">
      <CardContainer onClick={() => onGetUri(uri)}>
        <CardImage image={image} />
        <div>{label}</div>
        <div>{calories.toFixed(2)} calories</div>
        <div>{cookTime}</div>
      </CardContainer>
    </NavLink>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeCard);
