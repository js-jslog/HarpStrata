import getDegreeMatrix from './getDegreeMatrix'
import { getHarpLayouts, getHarpLayout } from './HarpLayout'
import { Layouts } from './HarpLayout/types'
import { Harpmatrix } from '../common/types'

const majorDiatonicLayout: [
  [ 'b3', undefined, undefined, 'b3', ],
  [ '1', '3', '5', '1', ],
  [ '2', '5', '7', '2', ],
  [ 'b2', 'b5', 'b7', 'b2', ],
  [ undefined, '4', '6', undefined, ],
  [ undefined, undefined, 'b6', undefined, ],
] = [
  [ 'b3',     ,     , 'b3', ],
  [ '1' , '3' , '5' , '1' , ],
  [ '2' , '5' , '7' , '2' , ],
  [ 'b2', 'b5', 'b7', 'b2', ],
  [     , '4' , '6' ,     , ],
  [     ,     , 'b6',     , ],
];

const layoutMap: {
  'major-diatonic': Harpmatrix;
} = {
  'major-diatonic': majorDiatonicLayout,
};

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

