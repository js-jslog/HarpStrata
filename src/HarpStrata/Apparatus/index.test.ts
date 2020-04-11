import { MajorDiatonicLayout } from './MajorDiatonicLayout'
import { LayoutIds } from './types'
import { getApparatusIds, getApparatus } from './index'

test('getApparatusIds function returns an array of the available layouts', () => {
  const expectedArray = [ LayoutIds.MajorDiatonic ]
  const actualArray = getApparatusIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getApparatus function can return a major diatonic layout', () => {
  const expectedMatrix = MajorDiatonicLayout
  const actualMatrix = getApparatus(LayoutIds.MajorDiatonic)

  expect(actualMatrix).toStrictEqual(expectedMatrix)
})

