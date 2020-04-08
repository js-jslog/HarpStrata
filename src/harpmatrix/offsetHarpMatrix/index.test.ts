import offsetHarpmatrix from './index';
import {
  example_majorDiatonicHarp_firstPosition,
  example_majorDiatonicHarp_secondPosition,
} from '../testResources';
import { Harpmatrix } from '../../common/types'

test('offsetHarpmatrix will return an identical matrix to the input when no offset is used', () => {
  const expectedMatrix = example_majorDiatonicHarp_firstPosition.degrees;
  const actualMatrix = offsetHarpmatrix(example_majorDiatonicHarp_firstPosition.degrees, 0);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

test('offsetHarpmatrix can convert a first position to a second position layout', () => {
  const expectedMatrix = example_majorDiatonicHarp_secondPosition.degrees;
  const actualMatrix = offsetHarpmatrix(example_majorDiatonicHarp_firstPosition.degrees, 7);

  expect(actualMatrix).toStrictEqual(expectedMatrix);
});

