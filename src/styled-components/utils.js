import { memoize } from 'lodash';

export const theme = (propSection, propName) =>
  memoize(props => props.theme[propSection][propName]);
