import { DegreeIds } from '../Degree'

import { getAscendingDegreeIds } from './index'


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
