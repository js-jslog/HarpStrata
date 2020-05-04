import { C, D, E, F } from '../Pitch/constants'
import { PitchIds } from '../Pitch'
import { ROOT, SECOND, THIRD, FOURTH } from '../Degree/constants'
import { DegreeIds } from '../Degree'

import { IsActiveIds } from './types'
import type { SiblingDisplayMatrices } from './types'
import { getIsActiveMatrix, getCounterpartDegreeIds, getCounterpartPitchIds } from './index'

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

test('getIsActiveMatrix returns the IsActiveMatrix when given Pitch Elements', () => {
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
  const actualIsActiveMatrix = getIsActiveMatrix(siblingDisplayMatrices, activePitchIds)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getCounterpartDegreeIds returns the DegreeIds[] for a given PitchIds[]', () => {
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
  const expectedCounterpartIds = [ DegreeIds.Second, DegreeIds.Third ]
  const actualCounterpartIds = getCounterpartDegreeIds(siblingDisplayMatrices, activePitchIds)

  expect(actualCounterpartIds).toStrictEqual(expectedCounterpartIds)
})

test('getCounterpartPitchIds returns the PitchIds[] for a given DegreeIds[]', () => {
  const degreeMatrix = [
    [ ROOT , SECOND ],
    [ THIRD, FOURTH ],
  ]
  const pitchMatrix = [
    [ C, D ],
    [ E, F ],
  ]
  const siblingDisplayMatrices: SiblingDisplayMatrices = [ degreeMatrix, pitchMatrix ]
  const activeDegreeIds = [ DegreeIds.Second, DegreeIds.Third ]
  const expectedCounterpartIds = [ PitchIds.D, PitchIds.E ]
  const actualCounterpartIds = getCounterpartPitchIds(siblingDisplayMatrices, activeDegreeIds)

  expect(actualCounterpartIds).toStrictEqual(expectedCounterpartIds)
})
