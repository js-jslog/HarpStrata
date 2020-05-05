import { IsActiveIds } from '../types'
import type { IsActiveProps } from '../types'
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
const baseIsActiveProps: IsActiveProps = {
  degreeMatrix, pitchMatrix, activeElementIds: []
}

test('getIsActiveMatrix returns the IsActiveMatrix when given an empty array or active elements', () => {
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(baseIsActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrix returns the IsActiveMatrix when given Degree Elements', () => {
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: [ DegreeIds.Root, DegreeIds.Fourth ] }
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Active  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Active   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getIsActiveMatrix returns the IsActiveMatrix when given Pitch Elements', () => {
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: [ PitchIds.D, PitchIds.E ] }
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive  , IsActiveIds.Active ],
    [ IsActiveIds.Active, IsActiveIds.Inactive   ],
  ]
  const actualIsActiveMatrix = getIsActiveMatrix(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})
