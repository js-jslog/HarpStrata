import offsetHarpmatrix from './index';
import {
  example_majorDiatonicLayout_firstPosition,
  example_majorDiatonicLayout_secondPosition
} from '../testResources';

test('offsetHarpMatrix can convert a first position to a second position layout', () => {
  const expectedMatrix = example_majorDiatonicLayout_secondPosition;
  const actualMatrix = offsetHarpmatrix(example_majorDiatonicLayout_firstPosition, 7);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});
