import type { IsActiveProps } from '../types'
import { EXAMPLE_STRATA } from '../../testResources'
import { C, D, E, F } from '../../Pitch/constants'
import { PitchIds } from '../../Pitch'
import { ROOT, SECOND, THIRD, FOURTH } from '../../Degree/constants'
import { DegreeIds } from '../../Degree'

import { getActiveIds } from './index'


const degreeMatrix = [
  [ ROOT , SECOND ],
  [ THIRD, FOURTH ],
]
const pitchMatrix = [
  [ C, D ],
  [ E, F ],
]
const baseIsActiveProps: IsActiveProps = {
  degreeMatrix, pitchMatrix, activeElementIds: []
}

test('getActiveIds returns the active ids for a given PitchIds[]', () => {
  const activePitchIds = [ PitchIds.D, PitchIds.E ]
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: activePitchIds }
  const expectedActiveIds = { activeDegreeIds: [ DegreeIds.Second, DegreeIds.Third ], activePitchIds }
  const actualActiveIds = getActiveIds(isActiveProps)

  expect(actualActiveIds).toStrictEqual(expectedActiveIds)
})

test('getActiveIds returns the active ids for a given DegreeIds[]', () => {
  const activeDegreeIds = [ DegreeIds.Second, DegreeIds.Third ]
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: activeDegreeIds }
  const expectedActiveIds = { activePitchIds: [ PitchIds.D, PitchIds.E ], activeDegreeIds }
  const actualActiveIds = getActiveIds(isActiveProps)

  expect(actualActiveIds).toStrictEqual(expectedActiveIds)
})

test('getActiveIds returns the active ids for a given PitchIds[]', () => {
  const { C_MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_STRATA
  const { degreeMatrix, pitchMatrix, isActiveComplex: { activePitchIds: examplePitchIds, activeDegreeIds: exampleDegreeIds }} = C_MAJOR_DIATONIC_FIRST_POZITION

  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: examplePitchIds }
  const actualActiveIds = getActiveIds(isActiveProps)

  const { activeDegreeIds: returnedActiveDegreeIds, activePitchIds: returnedActivePitchIds } = actualActiveIds
  const expectedDegreeIds = exampleDegreeIds as DegreeIds[]
  const expectedPitchIds = examplePitchIds as PitchIds[]
  const actualDegreeIds = returnedActiveDegreeIds as DegreeIds[]
  const actualPitchIds = returnedActivePitchIds as PitchIds[]

  // this is the most elegant solution I could find to the problem of comparing unordered arrays
  expect(actualDegreeIds).toEqual(expect.arrayContaining(expectedDegreeIds))
  expect(expectedDegreeIds).toEqual(expect.arrayContaining(actualDegreeIds))

  expect(actualPitchIds).toEqual(expect.arrayContaining(expectedPitchIds))
  expect(expectedPitchIds).toEqual(expect.arrayContaining(actualPitchIds))
})
