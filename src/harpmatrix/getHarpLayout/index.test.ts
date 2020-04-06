import { example_majorDiatonicLayout } from './testResources';
import getHarpLayout from './index';

test('getHarpLayout function can return a major diatonic layout', () => {
  const expectedMatrix = example_majorDiatonicLayout;
  const actualMatrix = getHarpLayout();

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

