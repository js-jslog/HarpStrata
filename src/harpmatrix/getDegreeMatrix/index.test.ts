import getDegreeMatrix from './index';
import { Degrees } from './types';
import { example_majorDiatonicLayout_firstPosition } from '../testResources';
import { example_majorDiatonicHalfstep } from '../testResources';

test('getDegreeMatrix function maps a simple 2d array of 0\'s to root degrees when halfsetp offset is 0', () => {
  const expectedArray = [[ Degrees.Root, ], [ Degrees.Root, ]];
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]], 0);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix function maps a simple 2d array of 7\'s to root degrees when halfsetp offset is 7', () => {
  const expectedArray = [[ Degrees.Root, ], [ Degrees.Root, ]];
  const actualArray = getDegreeMatrix([[ 7, ], [ 7, ]], 7);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix function maps a simple 2d array of 13\'s to root degrees when halfsetp offset is 0', () => {
  const expectedArray = [[ Degrees.Root, ], [ Degrees.Root, ]];
  const actualArray = getDegreeMatrix([[ 12, ], [ 12, ]], 0);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix function maps a simple 2d array of 0\'s to 4th degrees (6) when halfsetp offset is 7', () => {
  const expectedArray = [[ Degrees.Fourth, ], [ Degrees.Fourth, ]];
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]], 7);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix maps a major diatonic halfstepmatrix in to a major diatonic degreematrix in first position', () => {
  const expectedArray = example_majorDiatonicLayout_firstPosition;
  const actualArray = getDegreeMatrix(example_majorDiatonicHalfstep, 0);

  expect(actualArray).toStrictEqual(expectedArray);
});

