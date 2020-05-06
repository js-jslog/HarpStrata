import type { IsActiveProps } from '../types'
import { EXAMPLE_STRATA } from '../../testResources'
import { C, D, E, F } from '../../Pitch/constants'
import { PitchIds } from '../../Pitch'
import { ROOT, SECOND, THIRD, FOURTH } from '../../Degree/constants'
import { DegreeIds } from '../../Degree'

import { getActiveIds } from './index'


const { C_MAJOR_DIATONIC_FIRST_POZITION } = EXAMPLE_STRATA

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
  const { degreeMatrix, pitchMatrix, isActiveComplex: { activePitchIds, activeDegreeIds }} = C_MAJOR_DIATONIC_FIRST_POZITION
  const isActiveProps = { degreeMatrix, pitchMatrix, activeElementIds: activePitchIds }
  const expectedActiveIds = { activeDegreeIds, activePitchIds }
  const actualActiveIds = getActiveIds(isActiveProps)
  const { activeDegreeIds: returnedActiveDegreeIds, activePitchIds: returnedActivePitchIds } = actualActiveIds

  const castExpectedActiveDegreeIds = expectedActiveIds.activeDegreeIds as DegreeIds[]
  const castReturnedActiveDegreeIds = returnedActiveDegreeIds as DegreeIds[]
  const castExpectedActivePitchIds = expectedActiveIds.activePitchIds as PitchIds[]
  const castReturnedActivePitchIds = returnedActivePitchIds as PitchIds[]
  expect(castReturnedActiveDegreeIds).toEqual(expect.arrayContaining(castExpectedActiveDegreeIds))
  expect(castExpectedActiveDegreeIds).toEqual(expect.arrayContaining(castReturnedActiveDegreeIds))
  expect(castReturnedActivePitchIds).toEqual(expect.arrayContaining(castExpectedActivePitchIds))
  expect(castExpectedActivePitchIds).toEqual(expect.arrayContaining(castReturnedActivePitchIds))
})
