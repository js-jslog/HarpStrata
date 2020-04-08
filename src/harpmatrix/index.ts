import getDegreeMatrix from './getDegreeMatrix'
import { getHarpLayouts, getHarpLayout } from './HarpLayout'
import { Layouts } from './HarpLayout/types'
import { Harpmatrix } from '../common/types'

const getLayouts = getHarpLayouts;

enum Positions {
  First = 'FIRST',
  Second = 'SECOND',
};
const getPositions = (layout: string): Positions[] => [
  Positions.First,
  Positions.Second,
];

const getHarpmatrix = (layout: Layouts, position: string) => {
  const matrix = getHarpLayout(layout).halfstepmatrix;

  const positionMap = {
    first: 0,
    second: 7,
  };

  return getDegreeMatrix(matrix, positionMap[position]);

};

export {
  getLayouts,
  getPositions,
  getHarpmatrix,
  Positions,
};

