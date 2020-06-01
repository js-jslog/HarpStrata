import { DegreeIds, getDegree } from '../Degree'

import { mapHalfstepMatrix } from './index'

const fourth = getDegree(DegreeIds.Fourth)

test('mapHalfstepMatrix function maps a simple 2d array of 0\'s to 4th degrees when origin is Fourth degree', () => {
  const expectedArray = [[ fourth, ], [ fourth, ]]
  const actualArray = mapHalfstepMatrix([[ 0, ], [ 0, ]], DegreeIds, DegreeIds.Fourth, getDegree)

  expect(actualArray).toStrictEqual(expectedArray)
})
