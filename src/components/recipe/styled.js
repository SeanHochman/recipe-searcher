import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const RecipeContainer = styled.div`
  margin: auto;
  border: 1px solid black;
`;

export const RecipeImg = styled.div`
  margin: auto;
  max-width: 300px;
  min-height: 200px;
  background: white url(${props => props.image}) no-repeat;
  border-radius: ${theme('radius', 'small')};
  background-size: cover;
  background-position: 0% 25%;
`;
