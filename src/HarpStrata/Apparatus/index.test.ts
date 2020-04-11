import { MajorDiatonicLayout } from './MajorDiatonicLayout'
import { ApparatusIds } from './types'
import { getActiveApparatusIds, getApparatus } from './index'

test('getActiveApparatusIds function returns an array of the available layouts', () => {
  const expectedArray = [ ApparatusIds.MajorDiatonic ]
  const actualArray = getActiveApparatusIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getApparatus function can return a major diatonic layout', () => {
  const expectedMatrix = MajorDiatonicLayout
  const actualMatrix = getApparatus(ApparatusIds.MajorDiatonic)

  expect(actualMatrix).toStrictEqual(expectedMatrix)
})

