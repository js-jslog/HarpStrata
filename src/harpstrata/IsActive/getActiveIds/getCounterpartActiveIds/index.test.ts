import type { IsActiveProps } from '../../types'
import { C, D, E, F } from '../../../Pitch/constants'
import { PitchIds } from '../../../Pitch'
import { ROOT, SECOND, THIRD, FOURTH } from '../../../Degree/constants'
import { DegreeIds } from '../../../Degree'

import { getCounterpartDegreeIds, getCounterpartPitchIds } from './index'

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

test('getCounterpartDegreeIds returns the DegreeIds[] for a given PitchIds[]', () => {
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: [ PitchIds.D, PitchIds.E ] }
  const expectedCounterpartIds = [ DegreeIds.Second, DegreeIds.Third ]
  const actualCounterpartIds = getCounterpartDegreeIds(isActiveProps)

  expect(actualCounterpartIds).toStrictEqual(expectedCounterpartIds)
})

test('getCounterpartPitchIds returns the PitchIds[] for a given DegreeIds[]', () => {
  const isActiveProps = { ...baseIsActiveProps, activeElementIds: [ DegreeIds.Second, DegreeIds.Third ] }
  const expectedCounterpartIds = [ PitchIds.D, PitchIds.E ]
  const actualCounterpartIds = getCounterpartPitchIds(isActiveProps)

  expect(actualCounterpartIds).toStrictEqual(expectedCounterpartIds)
})
