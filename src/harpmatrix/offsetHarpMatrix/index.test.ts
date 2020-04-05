import offsetHarpmatrix from './index';
import {
  example_majorDiatonicLayout_firstPosition,
  example_majorDiatonicLayout_secondPosition
} from '../testResources';
import { Harpmatrix } from '../../common/types'

test('offsetHarpMatrix will return an identical matrix to the input when no offset is used', () => {
  const expectedMatrix = example_majorDiatonicLayout_firstPosition;
  const actualMatrix = offsetHarpmatrix(example_majorDiatonicLayout_firstPosition, 0);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

test('offsetHarpMatrix can convert a first position to a second position layout', () => {
  const expectedMatrix = example_majorDiatonicLayout_secondPosition;
  const actualMatrix = offsetHarpmatrix(example_majorDiatonicLayout_firstPosition, 7);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});
