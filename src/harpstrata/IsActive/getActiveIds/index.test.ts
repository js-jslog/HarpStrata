import type { IsActiveProps } from '../types'
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
