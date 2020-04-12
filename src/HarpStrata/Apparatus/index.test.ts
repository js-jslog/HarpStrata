import { MAJOR_DIATONIC_APPARATUS } from './MAJOR_DIATONIC_APPARATUS'

import { ApparatusIds } from './types'
import { getActiveApparatusIds, getApparatus } from './index'

test('getActiveApparatusIds function returns an array of the available apparatus', () => {
  const expectedArray = [ ApparatusIds.MajorDiatonic ]
  const actualArray = getActiveApparatusIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getApparatus function can return a major diatonic apparatus', () => {
  const expectedMatrix = MAJOR_DIATONIC_APPARATUS
  const actualMatrix = getApparatus(ApparatusIds.MajorDiatonic)

  expect(actualMatrix).toStrictEqual(expectedMatrix)
})

