import { PozitionIds } from '../types'
import { PitchIds } from '../../Pitch'

import { determinePozitionId } from './index'

test('determinePozitionId returns First for a C root on a C harp', () => {
  const { C: rootPitchId } = PitchIds
  const { C: harpKeyId } = PitchIds

  const { First: expectedPozitionId } = PozitionIds
  const actualPozitionId = determinePozitionId({ rootPitchId, harpKeyId })

  expect(actualPozitionId).toBe(expectedPozitionId)
})
