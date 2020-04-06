import { example_majorDiatonicLayout } from './testResources';
import { Layouts } from './types'
import getHarpLayout from './index';

test('getHarpLayout function can return a major diatonic layout', () => {
  const expectedMatrix = example_majorDiatonicLayout;
  const actualMatrix = getHarpLayout(Layouts.MajorDiatonic);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

