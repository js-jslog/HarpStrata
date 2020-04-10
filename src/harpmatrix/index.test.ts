import { Positions } from './index'
import { LayoutIds } from './HarpLayout/types'
import { getLayouts, getPositions, getHarpmatrix } from './index'
import { EXAMPLE_STRATA } from './testResources'

test('getLayouts function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getLayouts().includes(LayoutIds.MajorDiatonic)).toBeTruthy()
})

test('getPositions function returns an array with \'first\' as one of the values', () => {
  expect(getPositions().includes(Positions.First)).toBeTruthy()
})

test('getHarpmatrix function can return a first position major diatonic matrix', () => {
  const {MAJOR_DIATONIC_FIRST_POSITION: { degrees: expectedMatrix }} = EXAMPLE_STRATA
  const actualMatrix = getHarpmatrix(LayoutIds.MajorDiatonic, 'first')

  expect(actualMatrix).toStrictEqual(expectedMatrix)
})

test('getHarpmatrix function can return a second position major diatonic matrix', () => {
  const { MAJOR_DIATONIC_SECOND_POSITION: { degrees: expectedMatrix }} = EXAMPLE_STRATA
  const actualMatrix = getHarpmatrix(LayoutIds.MajorDiatonic, 'second')

  expect(actualMatrix).toStrictEqual(expectedMatrix)
})
