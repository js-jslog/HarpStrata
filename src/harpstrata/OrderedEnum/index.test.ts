import { DegreeIds } from '../Degree'

import { getOrderedEnum } from './index'

test('returns the values from the Degree enum', () => {
  const expectedArray = Object.values(DegreeIds)
  expect(getOrderedEnum(DegreeIds)).toStrictEqual(expectedArray)
})
