import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const RecipeContainer = styled.div`
  margin: 0;
  padding: ${theme('padding', 'small')} 0;
  border-bottom: 1px solid ${theme('colors', 'slate')};
`;

export const RecipeTitle = styled.h1`
  color: ${theme('colors', 'primary')};
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
