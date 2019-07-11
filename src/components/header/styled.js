import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const Head = styled.header`
  width: 100%;
  background-color: ${theme('colors', 'black')};
  border-bottom: 1px solid ${theme('colors', 'gray')};
  box-shadow: ${theme('card', 'shadow')};
  padding: ${theme('padding', 'default')};
`;
export const HeadCell = styled.div`
  color: ${theme('colors', 'empty')};
`;
