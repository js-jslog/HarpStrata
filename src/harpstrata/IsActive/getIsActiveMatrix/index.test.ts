import { IsActiveIds } from '../types'
import type { SiblingDisplayMatrices } from '../types'
import { C, D, E, F, PitchIds } from '../../Pitch'
import { ROOT, SECOND, THIRD, FOURTH, DegreeIds } from '../../Degree'

import { getIsActiveMatrix } from './index'

const degreeMatrix = [
  [ ROOT , SECOND ],
  [ THIRD, FOURTH ],
]
const pitchMatrix = [
  [ C, D ],
  [ E, F ],
]
const siblingDisplayMatrices: SiblingDisplayMatrices = [ degreeMatrix, pitchMatrix ]

test('getIsActiveMatrix returns the IsActiveMatrix when given Degree Elements', () => {
  const activeDegreeIds = [ DegreeIds.Root, DegreeIds.Fourth ]
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Active  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Active   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(siblingDisplayMatrices, activeDegreeIds)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrix returns the IsActiveMatrix when given Pitch Elements', () => {
  const activePitchIds = [ PitchIds.D, PitchIds.E ]
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive  , IsActiveIds.Active ],
    [ IsActiveIds.Active, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(siblingDisplayMatrices, activePitchIds)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})
