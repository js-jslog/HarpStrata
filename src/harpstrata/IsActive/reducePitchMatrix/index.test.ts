import { PitchIds, C, D, E, F } from '../../Pitch'
import { DegreeIds, ROOT, SECOND, THIRD, FOURTH } from '../../Degree'

import type { ReducedState } from './index'
import { reducePitchRow } from './index'

test('reducePitchRow will take a row of pitches and create an array of equivalent Degrees', () => {
  const degreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow = [ C, D, E, F ]
  const activePitchIds = [ PitchIds.D, PitchIds.F ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]

  const initialState: ReducedState = { degreeRow, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchRow.reduce(reducePitchRow, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})
