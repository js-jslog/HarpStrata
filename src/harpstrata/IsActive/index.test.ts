import { C, D, E, F } from '../Pitch/constants'
import { DegreeIds } from '../Degree/types'
import { ROOT, SECOND, THIRD, FOURTH } from '../Degree/constants'

import { IsActiveIds } from './types'
import type { SiblingDisplayMatrices } from './types'
import { getIsActiveMatrix } from './index'

test('getIsActiveMatrix returns the IsActiveMatrix when given Degree Elements', () => {
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
  const actualIsActiveMatrix = getIsActiveMatrix(siblingDisplayMatrices, activeDegreeIds)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})
