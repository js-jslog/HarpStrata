import { EXAMPLE_STRATA } from '../testResources'

import { getIsActiveComplex } from './index'

const { C_MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_STRATA
const { degreeMatrix, pitchMatrix, isActiveComplex } = C_MAJOR_DIATONIC_FIRST_POZITION
const { activeDegreeIds, activePitchIds } = isActiveComplex


test('getIsActiveComplex returns the IsActiveComplex for a c major diatonic harmonica with the c major pentatonic scale degrees active', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: activeDegreeIds }
  const actualIsActiveComplex = getIsActiveComplex(isActiveProps)
  const expectedIsActiveComplex = isActiveComplex

  expect(actualIsActiveComplex).toStrictEqual(expectedIsActiveComplex)
})

test('getIsActiveComplex returns the IsActiveComplex for a c major diatonic harmonica with the c major pentatonic scale pitches active', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: activePitchIds }
  const actualIsActiveComplex = getIsActiveComplex(isActiveProps)
  const expectedIsActiveComplex = isActiveComplex

  expect(actualIsActiveComplex).toStrictEqual(expectedIsActiveComplex)
})
