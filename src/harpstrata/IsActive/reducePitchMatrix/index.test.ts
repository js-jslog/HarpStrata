import { PitchIds, C, D, E, F, G, A, B } from '../../Pitch'
import type { PitchMatrix, PitchRow } from '../../Pitch'
import { DegreeIds, ROOT, SECOND, THIRD, FOURTH, FIFTH, SIXTH, SEVENTH } from '../../Degree'
import type { DegreeMatrix, DegreeRow } from '../../Degree'

import type { ReducedRowState, RowAccumulator,ReducedMatrixState, ReducedDegreeRowState, ReducedDegreeMatrixState } from './index'
import { reducePitchRow, reducePitchesRowToActives, reducePitchMatrix, reduceDegreeRow, reduceDegreeMatrix } from './index'

test('reducePitchesRowToActives will take a list of active PitchIds and create an array of equivalent DegreeIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activePitchIds = [ PitchIds.D, PitchIds.F ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]

  const initialState: RowAccumulator = { pitchRow, degreeRow, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchRow.reduce(reducePitchesRowToActives, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reducePitchRow will take a list of active PitchIds and create an array of equivalent DegreeIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activePitchIds = [ PitchIds.D, PitchIds.F ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]

  const initialState: ReducedRowState = { degreeRow, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchRow.reduce(reducePitchRow, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reducePitchMatrix will take a list of active PitchIds and create an array of equivalent DegreeIds given an paired Pitch and Degree row', () => {
  const degreeMatrix: DegreeMatrix = [
    [ ROOT , SECOND, THIRD, FOURTH ],
    [ FIFTH, SIXTH, SEVENTH, ROOT  ],
  ]
  const pitchMatrix: PitchMatrix = [
    [ C, D, E, F ],
    [ G, A, B, C ],
  ]
  const activePitchIds = [ PitchIds.D, PitchIds.F, PitchIds.G ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth, DegreeIds.Fifth ]

  const initialState: ReducedMatrixState = { degreeMatrix, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchMatrix.reduce(reducePitchMatrix, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reduceDegreeRow will take a list of active DegreeIds and create an array of equivalent PitchIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activeDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]
  const expectedPitchIds = [ PitchIds.D, PitchIds.F ]

  const initialState: ReducedDegreeRowState = { pitchRow, activePitchIds: [], activeDegreeIds }

  const { activePitchIds } = degreeRow.reduce(reduceDegreeRow, initialState)

  expect(activePitchIds).toStrictEqual(expectedPitchIds)
})

test('reducePitchMatrix will take a list of active DegreeIds and create an array of equivalent PitchIds given an paired Pitch and Degree row', () => {
  const degreeMatrix: DegreeMatrix = [
    [ ROOT , SECOND, THIRD, FOURTH ],
    [ FIFTH, SIXTH, SEVENTH, ROOT  ],
  ]
  const pitchMatrix: PitchMatrix = [
    [ C, D, E, F ],
    [ G, A, B, C ],
  ]
  const expectedPitchIds = [ PitchIds.D, PitchIds.F, PitchIds.G ]
  const activeDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth, DegreeIds.Fifth ]

  const initialState: ReducedDegreeMatrixState = { pitchMatrix, activePitchIds: [], activeDegreeIds }

  const { activePitchIds } = degreeMatrix.reduce(reduceDegreeMatrix, initialState)

  expect(activePitchIds).toStrictEqual(expectedPitchIds)
})
