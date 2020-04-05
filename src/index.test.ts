import { getLayouts, getHarpMatrix, offsetHarpMatrix } from './index';

const majorDiatonicLayout_firstPosition: [
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
const majorDiatonicLayout_secondPosition: [
  [ 'b6', undefined, undefined, 'b6', ],
  [ '4' , '6' , '1' , '4' , ],
  [ '5' , '1' , '3' , '5' , ],
  [ 'b5', '7' , 'b3', 'b5', ],
  [ undefined, 'b7', '2', undefined, ],
  [ undefined, undefined, 'b2', undefined, ],
] = [
  [ 'b6',     ,     , 'b6', ],
  [ '4' , '6' , '1' , '4' , ],
  [ '5' , '1' , '3' , '5' , ],
  [ 'b5', '7' , 'b3', 'b5', ],
  [     , 'b7', '2' ,     , ],
  [     ,     , 'b2',     , ],
];

test('index contains a getLayouts function', () => {
  expect(getLayouts).toBeDefined();
});

test('getLayouts function returns an array', () => {
  expect(Array.isArray(getLayouts())).toBeTruthy();
});

test('getLayouts function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getLayouts().includes('major-diatonic')).toBeTruthy();
});

test('getHarpMatrix function can return a first position major diatonic matrix', () => {
  const expectedMatrix = majorDiatonicLayout_firstPosition;
  const actualMatrix = getHarpMatrix();

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

test('offsetHarpMatrix can convert a first position to a second position layout', () => {
  const expectedMatrix = majorDiatonicLayout_secondPosition;
  const actualMatrix = offsetHarpMatrix(getHarpMatrix(), 7);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});
