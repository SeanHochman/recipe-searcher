import React, { useState, useEffect, useCallback } from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { Carousel, SlideWrapper, MoveButton } from './styled';

import RecipeCard from './RecipeCard';

const List = ({ recipes }) => {
  const [index, setIndex] = useState(0);

  const moveLeft = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };
  const moveRight = () => {
    if (index === recipes.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  useEffect(() => {
    setIndex(0);
  }, [recipes]);

  return (
    <>
      <Carousel>
        <SlideWrapper index={index} length={recipes.length}>
          {recipes.map((rec, i) => {
            const { recipe } = rec;
            return (
              <RecipeCard
                key={`${recipe.uri}`}
                index={index}
                i={i}
                recipe={recipe}
              />
            );
          })}
        </SlideWrapper>
        <MoveButton side="left" onClick={moveLeft} disabled={index === 0}>
          Prev
        </MoveButton>
        <MoveButton
          side="right"
          onClick={moveRight}
          disabled={index === recipes.length - 1}
        >
          Next
        </MoveButton>
      </Carousel>
    </>
  );
};

export default List;
