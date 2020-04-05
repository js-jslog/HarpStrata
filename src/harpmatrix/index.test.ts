import { getLayouts, getHarpMatrix } from './index';
import {
  example_majorDiatonicLayout_firstPosition,
} from './testResources';

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
  const expectedMatrix = example_majorDiatonicLayout_firstPosition;
  const actualMatrix = getHarpMatrix();

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

