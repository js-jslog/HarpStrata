import { getLayouts, getHarpmatrix } from './index';
import {
  example_majorDiatonicLayout_firstPosition,
  example_majorDiatonicLayout_secondPosition,
} from './testResources';

test('getLayouts function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getLayouts().includes('major-diatonic')).toBeTruthy();
});

test('getHarpmatrix function can return a first position major diatonic matrix', () => {
  const expectedMatrix = example_majorDiatonicLayout_firstPosition;
  const actualMatrix = getHarpmatrix('major-diatonic', 'first');

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

test('getHarpmatrix function can return a second position major diatonic matrix', () => {
  const expectedMatrix = example_majorDiatonicLayout_secondPosition;
  const actualMatrix = getHarpmatrix('major-diatonic', 'second');

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});
