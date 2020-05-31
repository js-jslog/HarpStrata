import { DegreeIds } from '../Degree'

import { getAscendingDegreeIds, getDescendingDegreeIds } from './index'


test('Degree specific function returns the values from the DegreeIds enum from the parameterised origin', () => {
  const {
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
  } = DegreeIds
  const expectedArray = [
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
    Root, Flat2, Second, Flat3, Third, Fourth
  ]
  expect(getAscendingDegreeIds(Flat5)).toStrictEqual(expectedArray)
})

test('Degree specific function returns the descending values from the DegreeIds enum from the parameterised origin', () => {
  const {
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
  } = DegreeIds
  const expectedArray = [
    Flat5, Fourth, Third, Flat3, Second, Flat2,
    Root, Seventh, Flat7, Sixth, Flat6, Fifth
  ]
  expect(getDescendingDegreeIds(Flat5)).toStrictEqual(expectedArray)
})
