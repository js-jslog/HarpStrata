import { EXAMPLE_STRATA } from '../testResources'

import { getIsActiveComplex } from './index'

const { C_MAJOR_DIATONIC_FIRST_POZITION_C_MAJOR_PENTATONIC: {
  degreeMatrix,
  pitchMatrix,
  isActiveComplex,
}} = EXAMPLE_STRATA
const { activeDegreeIds, activePitchIds } = isActiveComplex

test('getIsActiveComplex returns the IsActiveComplex for a c major diatonic harmonica with the c major pentatonic scale degrees active', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeIds: activeDegreeIds }
  const actualIsActiveComplex = getIsActiveComplex(isActiveProps)
  const expectedIsActiveComplex = isActiveComplex

  expect(actualIsActiveComplex).toStrictEqual(expectedIsActiveComplex)
})

test('getIsActiveComplex returns the IsActiveComplex for a c major diatonic harmonica with the c major pentatonic scale pitches active', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeIds: activePitchIds }
  const actualIsActiveComplex = getIsActiveComplex(isActiveProps)
  const expectedIsActiveComplex = isActiveComplex

  expect(actualIsActiveComplex).toStrictEqual(expectedIsActiveComplex)
})
