import getDegreeMatrix from './index';

test('getDegreeMatrix function maps a simple 2d array of 0\'s to root degrees', () => {
  const expectedArray = [[ 1, ], [ 1, ]];
  const actualArray = getDegreeMatrix([[ 0, ], [ 0, ]]);

  expect(actualArray).toStrictEqual(expectedArray);
});
