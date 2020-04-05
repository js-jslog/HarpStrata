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

const getLayouts = () => Object.keys(layoutMap);

const getHarpMatrix = () => layoutMap['major-diatonic'];

export { getLayouts, getHarpMatrix };

