import { EXAMPLE_STRATA } from './testResources'
import { PozitionIds } from './Pozition/types'
import { ApparatusIds } from './Apparatus/types'

import { getHarpIds, getPozitions, getHarpStrata} from './index'

test('getHarpIds function returns an array with a major diatonic as one of the values', () => {
  expect(getHarpIds().includes(ApparatusIds.MajorDiatonic)).toBeTruthy()
})

test('getPozitions function returns an array with a first position as one of the values', () => {
  expect(getPozitions().includes(PozitionIds.First)).toBeTruthy()
})

test('getHarpStrata can return a first position major diatonic HarpStrata', () => {
  const { MAJOR_DIATONIC_FIRST_POSITION: expectedStrata } = EXAMPLE_STRATA
  const actualStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First)

  expect(actualStrata).toStrictEqual(expectedStrata)
})

test('getHarpStrata can return a second position major diatonic HarpStrata', () => {
  const { MAJOR_DIATONIC_SECOND_POSITION: expectedStrata } = EXAMPLE_STRATA
  const actualStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.Second)

  expect(actualStrata).toStrictEqual(expectedStrata)
})
