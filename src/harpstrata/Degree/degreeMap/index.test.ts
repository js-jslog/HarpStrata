import { DegreeIds } from '../types'
import type { Degree } from '../types'

import { getOrderedDegreeIds, getDegree } from './index'

const { Root, Flat2, Second, Flat3, Third, Fourth, Flat5, Fifth, Flat6, Sixth, Flat7, Seventh } = DegreeIds


test('getOrderedDegreeIds function returns an ordered array of the available degreeIds defaulting to starting at root', () => {
  const expectedArray = [
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh
  ]
  const actualArray = getOrderedDegreeIds()

  expect(actualArray).toEqual(expectedArray)
})

test('getOrderedDegreeIds function returns an ordered array of the available degreeIds starting from an input value', () => {
  const expectedArray = [
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
    Root, Flat2, Second, Flat3, Third, Fourth
  ]
  const actualArray = getOrderedDegreeIds(DegreeIds.Flat5)

  expect(actualArray).toEqual(expectedArray)
})

test('getDegree function can return a root degree', () => {
  const ROOT_DEGREE: Degree = { id: DegreeIds.Root } as const
  const actualDegree = getDegree(ROOT_DEGREE.id)

  expect(actualDegree).toStrictEqual(ROOT_DEGREE)
})
