import { C, D, E, F } from '../Pitch/constants'
import { PitchIds } from '../Pitch'
import { ROOT, SECOND, THIRD, FOURTH } from '../Degree/constants'
import { DegreeIds } from '../Degree'

import { IsActiveIds } from './types'
import type { SiblingDisplayMatrices } from './types'
import { getIsActiveMatrixForDegrees, getIsActiveMatrixForPitches } from './index'

test('getIsActiveMatrixForDegrees returns the IsActiveMatrix when given Degree Elements', () => {
  const degreeMatrix = [
    [ ROOT , SECOND ],
    [ THIRD, FOURTH ],
  ]
  const pitchMatrix = [
    [ C, D ],
    [ E, F ],
  ]
  const siblingDisplayMatrices: SiblingDisplayMatrices = [ degreeMatrix, pitchMatrix ]
  const activeDegreeIds = [ DegreeIds.Root, DegreeIds.Fourth ]
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Active  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Active   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrixForDegrees(siblingDisplayMatrices, activeDegreeIds)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrixForPitches returns the IsActiveMatrix when given Pitch Elements', () => {
  const degreeMatrix = [
    [ ROOT , SECOND ],
    [ THIRD, FOURTH ],
  ]
  const pitchMatrix = [
    [ C, D ],
    [ E, F ],
  ]
  const siblingDisplayMatrices: SiblingDisplayMatrices = [ degreeMatrix, pitchMatrix ]
  const activePitchIds = [ PitchIds.D, PitchIds.E ]
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive  , IsActiveIds.Active ],
    [ IsActiveIds.Active, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrixForPitches(siblingDisplayMatrices, activePitchIds)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})
