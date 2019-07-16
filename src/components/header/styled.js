import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const Head = styled.header`
  width: 100%;
  height: 300px;
  background-image: url(/images/food-1932466_1280.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${theme('colors', 'black')};
  border-bottom: 1px solid ${theme('colors', 'gray')};
  box-shadow: ${theme('card', 'shadow')};
  padding: ${theme('padding', 'default')};
  position: relative;
`;
export const HeadCell = styled.div`
  color: ${theme('colors', 'empty')};
  margin-right: ${theme('margin', 'default')};
`;

export const TagLine = styled.div`
  font-family: ${theme('fonts', 'pacifico')};
  font-size: ${theme('fontSize', 'huge')};
  color: ${theme('colors', 'empty')};
  padding: ${theme('padding', 'default')};
  position: absolute;
  bottom: 0;
`;
