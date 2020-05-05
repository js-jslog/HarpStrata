import { PitchIds, C, D, E, F, G, A, B } from '../../../Pitch'
import type { PitchMatrix } from '../../../Pitch'
import { DegreeIds, ROOT, SECOND, THIRD, FOURTH, FIFTH, SIXTH, SEVENTH } from '../../../Degree'
import type { DegreeMatrix } from '../../../Degree'

import type { MatrixAccumulator } from './index'
import { reducePitchMatrixForActiveIds, reduceDegreeMatrixForActiveIds } from './index'

test('reducePitchMatrixForActiveIds will take a list of active PitchIds and create an array of equivalent DegreeIds given a paired Pitch and Degree matrix', () => {
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

  const initialState: MatrixAccumulator = { pitchMatrix, degreeMatrix, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchMatrix.reduce(reducePitchMatrixForActiveIds, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reduceDegreeMatrixForActiveIds will take a list of active DegreeIds and create an array of equivalent PitchIds given an paired Pitch and Degree row', () => {
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

  const initialState: MatrixAccumulator = { degreeMatrix, pitchMatrix, activePitchIds: [], activeDegreeIds }

  const { activePitchIds } = degreeMatrix.reduce(reduceDegreeMatrixForActiveIds, initialState)

  expect(activePitchIds).toStrictEqual(expectedPitchIds)
})
