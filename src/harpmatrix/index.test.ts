import { Positions } from './index';
import { LayoutIds } from './HarpLayout/types'
import { getLayouts, getPositions, getHarpmatrix } from './index';
import {
  example_majorDiatonicHarp_firstPosition,
  example_majorDiatonicHarp_secondPosition,
} from './testResources';

test('getLayouts function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getLayouts().includes(LayoutIds.MajorDiatonic)).toBeTruthy();
});

test('getPositions function returns an array with \'first\' as one of the values', () => {
  expect(getPositions('major-diatonic').includes(Positions.First)).toBeTruthy();
});

test('getHarpmatrix function can return a first position major diatonic matrix', () => {
  const expectedMatrix = example_majorDiatonicHarp_firstPosition.degrees;
  const actualMatrix = getHarpmatrix(LayoutIds.MajorDiatonic, 'first');

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

test('getHarpmatrix function can return a second position major diatonic matrix', () => {
  const expectedMatrix = example_majorDiatonicHarp_secondPosition.degrees;
  const actualMatrix = getHarpmatrix(LayoutIds.MajorDiatonic, 'second');

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});
