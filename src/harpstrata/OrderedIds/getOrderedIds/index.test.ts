import { DegreeIds } from '../../Degree'

import { getAscendingIds } from './index'

const { Root, Flat2, Second, Flat3, Third, Fourth, Flat5, Fifth, Flat6, Sixth, Flat7, Seventh } = DegreeIds

test('getAscendingIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh
  ]
  const actualArray = getAscendingIds()

  expect(actualArray).toEqual(expectedArray)
})
