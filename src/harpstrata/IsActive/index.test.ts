import { EXAMPLE_STRATA } from '../testResources'
import type { PitchIds } from '../Pitch'
import type { DegreeIds } from '../Degree'

import { getIsActiveComplex } from './index'

const { C_MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_STRATA
const { degreeMatrix, pitchMatrix, isActiveComplex } = C_MAJOR_DIATONIC_FIRST_POZITION
const { activeDegreeIds, activePitchIds, isActiveMatrix } = isActiveComplex


test('getIsActiveComplex returns the IsActiveComplex for a c major diatonic harmonica with the c major pentatonic scale degrees active', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: activeDegreeIds }
  const { isActiveMatrix: returnedIsActiveMatrix, activeDegreeIds: returnedDegreeIds, activePitchIds: returnedPitchIds } = getIsActiveComplex(isActiveProps)

  expect(returnedIsActiveMatrix).toStrictEqual(isActiveMatrix)

  const expectedDegreeIds = activeDegreeIds as DegreeIds[]
  const expectedPitchIds = activePitchIds as PitchIds[]
  const actualDegreeIds = returnedDegreeIds as DegreeIds[]
  const actualPitchIds = returnedPitchIds as PitchIds[]

  expect(actualDegreeIds).toEqual(expect.arrayContaining(expectedDegreeIds))
  expect(expectedDegreeIds).toEqual(expect.arrayContaining(actualDegreeIds))

  expect(actualPitchIds).toEqual(expect.arrayContaining(expectedPitchIds))
  expect(expectedPitchIds).toEqual(expect.arrayContaining(actualPitchIds))
})

test('getIsActiveComplex returns the IsActiveComplex for a c major diatonic harmonica with the c major pentatonic scale pitches active', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: activePitchIds }
  const { isActiveMatrix: returnedIsActiveMatrix, activeDegreeIds: returnedDegreeIds, activePitchIds: returnedPitchIds } = getIsActiveComplex(isActiveProps)

  expect(returnedIsActiveMatrix).toStrictEqual(isActiveMatrix)

  const expectedDegreeIds = activeDegreeIds as DegreeIds[]
  const expectedPitchIds = activePitchIds as PitchIds[]
  const actualDegreeIds = returnedDegreeIds as DegreeIds[]
  const actualPitchIds = returnedPitchIds as PitchIds[]

  expect(actualDegreeIds).toEqual(expect.arrayContaining(expectedDegreeIds))
  expect(expectedDegreeIds).toEqual(expect.arrayContaining(actualDegreeIds))

  expect(actualPitchIds).toEqual(expect.arrayContaining(expectedPitchIds))
  expect(expectedPitchIds).toEqual(expect.arrayContaining(actualPitchIds))
})
