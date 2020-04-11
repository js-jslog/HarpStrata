import { ApparatusIds } from './Apparatus/types'
import { getLayouts, getPositions, getHarpStrata, Positions } from './index'
import { EXAMPLE_STRATA } from './testResources'

test('getLayouts function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getLayouts().includes(ApparatusIds.MajorDiatonic)).toBeTruthy()
})

test('getPositions function returns an array with \'first\' as one of the values', () => {
  expect(getPositions().includes(Positions.First)).toBeTruthy()
})

test('getHarpStrata can return a first position major diatonic HarpStrata', () => {
  const { MAJOR_DIATONIC_FIRST_POSITION: expectedStrata } = EXAMPLE_STRATA
  const actualStrata = getHarpStrata(ApparatusIds.MajorDiatonic, 'first')

  expect(actualStrata).toStrictEqual(expectedStrata)
})

test('getHarpStrata can return a second position major diatonic HarpStrata', () => {
  const { MAJOR_DIATONIC_SECOND_POSITION: expectedStrata } = EXAMPLE_STRATA
  const actualStrata = getHarpStrata(ApparatusIds.MajorDiatonic, 'second')

  expect(actualStrata).toStrictEqual(expectedStrata)
})
