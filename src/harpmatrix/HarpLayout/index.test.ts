import { example_majorDiatonicLayout } from './testResources';
import { Layouts } from './types'
import { getHarpLayouts, getHarpLayout } from './index';

test('getHarpLayouts function returns an array of the available layouts', () => {
  const expectedArray = [ Layouts.MajorDiatonic ];
  const actualArray = getHarpLayouts();

  expect(actualArray).toStrictEqual(expectedArray);
});

test('getHarpLayout function can return a major diatonic layout', () => {
  const expectedMatrix = example_majorDiatonicLayout;
  const actualMatrix = getHarpLayout(Layouts.MajorDiatonic);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

