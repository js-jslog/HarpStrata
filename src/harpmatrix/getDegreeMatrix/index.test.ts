import getDegreeMatrix from './index';

test('getDegreeMatrix function maps a simple 2d array of 0\'s to root degrees when halfsetp offset is 0', () => {
  const expectedArray = [[ 1, ], [ 1, ]];
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]], 0);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix function maps a simple 2d array of 7\'s to root degrees when halfsetp offset is 7', () => {
  const expectedArray = [[ 1, ], [ 1, ]];
  const actualArray = getDegreeMatrix([[ 7, ], [ 7, ]], 7);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix function maps a simple 2d array of 13\'s to root degrees when halfsetp offset is 0', () => {
  const expectedArray = [[ 1, ], [ 1, ]];
  const actualArray = getDegreeMatrix([[ 12, ], [ 12, ]], 0);

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getDegreeMatrix function maps a simple 2d array of 0\'s to 4th degrees (6) when halfsetp offset is 7', () => {
  const expectedArray = [[ 6, ], [ 6, ]];
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]], 7);

  expect(actualArray).toStrictEqual(expectedArray);
});

