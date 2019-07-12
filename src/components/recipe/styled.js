import styled, { css } from 'styled-components';
// import { theme } from '../../styled-components/utils';

export const RecipeContainer = styled.div`
  margin: auto;
  border: 1px solid black;
  min-height: 200px;
  background: red;
`;

export const RecipeImg = styled.div`
  margin: auto;
  max-width: 300px;
  min-height: 200px;
  overflow: hidden;
  border-radius: 50%;
`;

export const RecipeContent = styled.div`
  color: blue;
  max-width: 400px;
  background-color: blue;
  margin: 1rem;
`;
