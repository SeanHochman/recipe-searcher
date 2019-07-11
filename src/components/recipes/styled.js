import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const CardImage = styled.div`
  margin: auto;
  max-width: 300px;
  min-height: 200px;
  background: white url(${props => props.image}) no-repeat;
  border-radius: ${theme('radius', 'small')};
`;

export const CardContainer = styled.div`
  padding: ${theme('padding', 'default')};
  border: 1px solid ${theme('colors', 'slate')};
  margin: ${theme('margin', 'default')};
  border-radius: ${theme('radius', 'small')};
`;
