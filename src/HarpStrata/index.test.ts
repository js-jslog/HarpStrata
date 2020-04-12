import { ApparatusIds } from './Apparatus/types'
import { getHarpIds, getPositions, getHarpStrata} from './index'
import { PositionIds } from './Position/types'
import { EXAMPLE_STRATA } from './testResources'

test('getHarpIds function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getHarpIds().includes(ApparatusIds.MajorDiatonic)).toBeTruthy()
})

test('getPositions function returns an array with \'first\' as one of the values', () => {
  expect(getPositions().includes(PositionIds.First)).toBeTruthy()
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
