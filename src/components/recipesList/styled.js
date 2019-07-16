import styled, { css } from 'styled-components';
import { theme } from '../../styled-components/utils';

export const Title = styled.h1`
  font-family: ${theme('fonts', 'pacifico')};
  color: ${theme('colors', 'tan')};
`;

export const Carousel = styled.div`
  min-height: 300px;
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const pos = (index, length) => {
  return index * (100 / length);
};

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  min-width: 100vw;
  transform: ${({ index, length }) =>
    index < length - 1
      ? css`translateX(-${({ index, length }) => pos(index, length)}%);`
      : css`translateX(-${({ index, length }) => pos(index, length + 1.3)}%);`};

  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const CardContainer = styled.div`
  ${({ cur }) =>
    !cur &&
    css`
      box-shadow: inset 0px 0px 1000px 200px rgba(0, 0, 0, 0.3);
    `}
  transition: all 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  min-height: 300px;
  min-width: 33vw;
  background: white url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  :last-of-type {
    :after {
      content: '';
      position: absolute;
      left: 100%;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme('colors', 'empty')};
    }
  }

  :hover {
    box-shadow: none;
  }
`;

export const CardInfo = styled.div`
  color: white;
  width: 100%;
  height: fit-content;
  padding: ${theme('padding', 'small')};
  background-color: rgba(0, 0, 0, 0.4);
`;

const whichSide = side => {
  const which = {
    left: css`
      left: 0;
    `,
    right: css`
      right: 0;
    `
  };
  return which[side];
};

export const MoveButton = styled.button`
  cursor: pointer;
  position: absolute;
  ${({ side }) => whichSide(side)}
  background-color: rgba(0, 0, 0, 0.7);
  top: calc(50% - 25px);
  color: white;
  opacity: 0;
  height: 50px;
  width: 50px;
  outline: none;
  border: none;
  transition: opacity 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  :before {
    content: '';
    height: 500%;
    width: 75px;
    position: absolute;
    top: -100px;
    ${({ side }) => whichSide(side)}
  }
  :hover {
    opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  }
`;
