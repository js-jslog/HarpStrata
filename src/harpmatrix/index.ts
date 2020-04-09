import { getDegreeMatrix } from './Degree'
import { getHarpLayouts, getHarpLayout } from './HarpLayout'
import { LayoutIds } from './HarpLayout/types'

const getLayouts = getHarpLayouts;

const getHarpmatrix = (layout: LayoutIds, position: string) => {
  const matrix = getHarpLayout(layout).halfsteps;

  return getDegreeMatrix(matrix, positionMap[position]);
};

enum Positions {
  First = 'FIRST',
  Second = 'SECOND',
};
const positionMap = {
  first: 0,
  second: 7,
};
const getPositions = (layout: string): Positions[] => [
  Positions.First,
  Positions.Second,
];


export {
  getLayouts,
  getPositions,
  getHarpmatrix,
  Positions,
};

