import { PitchIds } from '../types'
import { PozitionIds } from '../../Pozition'

import { getHarpKeyId } from './index'

test('getHarpKeyId returns C for a C root in first pozition', () => {
  const { C: rootPitchId } = PitchIds
  const { First: pozitionId } = PozitionIds

  const { C: expectedHarpKeyId } = PitchIds
  const actualHarpKeyId = getHarpKeyId({rootPitchId, pozitionId})

  expect(actualHarpKeyId).toBe(expectedHarpKeyId)
})
