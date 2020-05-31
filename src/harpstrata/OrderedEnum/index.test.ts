import { PitchIds } from '../Pitch'
import { DegreeIds } from '../Degree'

import { getOrderedEnum } from './index'

test('returns the values from the DegreeIds', () => {
  const expectedArray = Object.values(DegreeIds)
  expect(getOrderedEnum(DegreeIds)).toStrictEqual(expectedArray)
})

test('returns the values from the PitchIds', () => {
  const expectedArray = Object.values(PitchIds)
  expect(getOrderedEnum(PitchIds)).toStrictEqual(expectedArray)
})
