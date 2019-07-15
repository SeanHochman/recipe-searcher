import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const RecipeContainer = styled.div`
  margin: auto;
  padding: ${theme('padding', 'default')};
  border-radius: ${theme('radius', 'small')};
`;

export const RecipeImg = styled.div`
  max-width: 300px;
  min-height: 200px;
  overflow: hidden;
  border-radius: ${theme('radius', 'small')};
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
