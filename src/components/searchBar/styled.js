import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const SearchContainer = styled.div`
  width: 100vw;
  padding: ${theme('padding', 'default')};
  border-bottom: 1px solid ${theme('colors', 'slate')};
  display: flex;
`;

export const SearchField = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
export const HowMany = styled.select`
  border: none;
  outline: none;
  background-color: white;
`;
export const HowManyOpt = styled.option`
  text-align: right'
`;
