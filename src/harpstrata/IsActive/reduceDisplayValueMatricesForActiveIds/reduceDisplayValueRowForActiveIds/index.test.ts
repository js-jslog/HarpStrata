import { PitchIds, C, D, E, F } from '../../../Pitch'
import type { PitchRow } from '../../../Pitch'
import { DegreeIds, ROOT, SECOND, THIRD, FOURTH } from '../../../Degree'
import type { DegreeRow } from '../../../Degree'

import type { RowAccumulator } from './index'
import { reducePitchRowForActiveIds, reduceDegreeRowForActiveIds } from './index'

test('reducePitchRowForActiveIds will take a list of active PitchIds and create an array of equivalent DegreeIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activePitchIds = [ PitchIds.D, PitchIds.F ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]

  const initialState: RowAccumulator = { pitchRow, degreeRow, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchRow.reduce(reducePitchRowForActiveIds, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reduceDegreeRowForActiveIds will take a list of active DegreeIds and create an array of equivalent PitchIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activeDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]
  const expectedPitchIds = [ PitchIds.D, PitchIds.F ]

  const initialState: RowAccumulator = { degreeRow, pitchRow, activePitchIds: [], activeDegreeIds }

  const { activePitchIds } = degreeRow.reduce(reduceDegreeRowForActiveIds, initialState)

  expect(activePitchIds).toStrictEqual(expectedPitchIds)
})
