import type { IsActiveProps } from '../types'
import { EXAMPLE_STRATA } from '../../testResources'
import { C, D, E, F } from '../../Pitch/constants'
import { PitchIds } from '../../Pitch'
import { ROOT, SECOND, THIRD, FOURTH } from '../../Degree/constants'
import { DegreeIds } from '../../Degree'

import { getActiveIds } from './index'


const basicDegreeMatrix = [
  [ ROOT , SECOND ],
  [ THIRD, FOURTH ],
]
const basicPitchMatrix = [
  [ C, D ],
  [ E, F ],
]
const baseIsActiveProps: IsActiveProps = {
  degreeMatrix: basicDegreeMatrix, pitchMatrix: basicPitchMatrix, activeElementIds: []
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

const { C_MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_STRATA
const { degreeMatrix, pitchMatrix, isActiveComplex: { activePitchIds: examplePitchIds, activeDegreeIds: exampleDegreeIds }} = C_MAJOR_DIATONIC_FIRST_POZITION

test('getActiveIds returns the active ids for a given PitchIds[]', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: examplePitchIds }
  const actualActiveIds = getActiveIds(isActiveProps)
  const expectedActiveIds = { activePitchIds: examplePitchIds, activeDegreeIds: exampleDegreeIds }

  expect(actualActiveIds).toEqual(expectedActiveIds)
})

test('getActiveIds returns the active ids for a given DegreeIds[]', () => {
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: exampleDegreeIds }
  const actualActiveIds = getActiveIds(isActiveProps)
  const expectedActiveIds = { activePitchIds: examplePitchIds, activeDegreeIds: exampleDegreeIds }

  expect(actualActiveIds).toEqual(expectedActiveIds)
})
