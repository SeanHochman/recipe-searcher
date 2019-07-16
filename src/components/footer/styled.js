import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: ${theme('padding', 'default')};
  border-top: 1px solid ${theme('colors', 'tan')};
  box-shadow: ${theme('card', 'shadow')};
`;

export const HomeLink = styled.h2`
  font-family: ${theme('fonts', 'pacifico')};
  \color: ${theme('colors', 'tan')};
`;
