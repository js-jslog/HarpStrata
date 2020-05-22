import { PitchIds } from '../types'
import { PozitionIds } from '../../Pozition'

import { getRootPitchId } from './index'

test('getRootPitchId returns C for a C harp in first pozition', () => {
  const { C: harpKeyId } = PitchIds
  const { First: pozitionId } = PozitionIds

  const { C: expectedRootPitchId } = PitchIds
  const actualRootPitchId = getRootPitchId({harpKeyId, pozitionId})

  expect(actualRootPitchId).toBe(expectedRootPitchId)
})
