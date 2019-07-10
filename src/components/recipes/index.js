import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { recipes } = state.searchr;
  return { recipes };
};

const Recipes = ({ recipes }) => {
  console.log('asdf', recipes);
  const recipeList =
    recipes &&
    recipes.hits.map((recipe, i) => {
      const entry = recipe.recipe;
      return <div key={`${entry.label}-${i}`}>{entry.label}</div>;
    });
  return (
    <>
      <h1>Recipes</h1>
      {recipeList}
    </>
  );
};

export default connect(mapStateToProps)(Recipes);
