import { DegreeIds } from '../../Degree'

import { getAscendingDegreeIds } from './index'

const { Root, Flat2, Second, Flat3, Third, Fourth, Flat5, Fifth, Flat6, Sixth, Flat7, Seventh } = DegreeIds

test('getAscendingDegreeIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh
  ]
  const actualArray = getAscendingDegreeIds()

  expect(actualArray).toEqual(expectedArray)
})

test('getAscendingDegreeIds function returns an ordered array of the available degreeIds starting from an input value', () => {
  const expectedArray = [
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
    Root, Flat2, Second, Flat3, Third, Fourth
  ]
  const actualArray = getAscendingDegreeIds(DegreeIds.Flat5)

  expect(actualArray).toEqual(expectedArray)
})
