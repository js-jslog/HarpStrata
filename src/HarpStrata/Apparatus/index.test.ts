import { MajorDiatonicApparatus } from './MajorDiatonicApparatus'

import { ApparatusIds } from './types'
import { getActiveApparatusIds, getApparatus } from './index'

test('getActiveApparatusIds function returns an array of the available apparatus', () => {
  const expectedArray = [ ApparatusIds.MajorDiatonic ]
  const actualArray = getActiveApparatusIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getApparatus function can return a major diatonic apparatus', () => {
  const expectedMatrix = MajorDiatonicApparatus
  const actualMatrix = getApparatus(ApparatusIds.MajorDiatonic)

  expect(actualMatrix).toStrictEqual(expectedMatrix)
})

