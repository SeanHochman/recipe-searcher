import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const SearchContainer = styled.div`
  width: 100vw;
  padding: ${theme('padding', 'default')};
  border-bottom: 1px solid ${theme('colors', 'slate')};
`;

export const SearchField = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
