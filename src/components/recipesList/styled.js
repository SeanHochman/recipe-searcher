import styled from 'styled-components';
import { theme } from '../../styled-components/utils';

export const CardContainer = styled.div`
  min-height: 300px;
  min-width: 300px;
  background: white url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardInfo = styled.div`
  color: white;
  width: 100%;
  height: fit-content;
  padding: ${theme('padding', 'small')};
  background-color: rgba(0, 0, 0, 0.4);
`;
