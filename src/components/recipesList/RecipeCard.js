import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getUri } from '../../actions/filter';

import { CardContainer, CardInfo } from './styled';

const mapDispatchToProps = dispatch => ({
  onGetUri: bindActionCreators(getUri, dispatch)
});

const RecipeCard = ({ recipe, onGetUri, i, index }) => {
  const { label, calories, totalTime, uri, image } = recipe;

  const cookTime =
    totalTime !== 0 ? `Cook time: ${totalTime} minutes` : `Cook time: unknown`;

  const cur = index === i ? true : false;

  return (
    <NavLink to="/recipe">
      <CardContainer cur={cur} image={image} onClick={() => onGetUri(uri)}>
        <CardInfo>
          <div>{label}</div>
          <div>{calories.toFixed(2)} calories</div>
          <div>{cookTime}</div>
        </CardInfo>
      </CardContainer>
    </NavLink>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeCard);
