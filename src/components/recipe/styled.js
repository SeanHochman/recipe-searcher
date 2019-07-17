import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styled-components/utils';

export const RecipeContainer = styled.div``;

export const RecipeTitle = styled.h1`
  color: ${theme('colors', 'tan')};
`;

export const RecipeImg = styled.div`
  min-height: 300px;
  min-width: 300px;
  background: white url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: ${theme('margin', 'medium')};
`;

export const RecipeContent = styled.div`
  margin: 1rem;
`;

export const Ingredients = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 200px;
`;

export const Ingredient = styled.div`
  max-width: 300px;
  margin: ${theme('margin', 'xsmall')};
`;

export const Back = styled(Link)`
  padding: ${theme('padding', 'small')};
`;
