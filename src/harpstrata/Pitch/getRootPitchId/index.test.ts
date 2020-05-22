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

test('getRootPitchId returns G for a C harp in second pozition', () => {
  const { C: harpKeyId } = PitchIds
  const { Second: pozitionId } = PozitionIds

  const { G: expectedRootPitchId } = PitchIds
  const actualRootPitchId = getRootPitchId({harpKeyId, pozitionId})

  expect(actualRootPitchId).toBe(expectedRootPitchId)
})

test('getRootPitchId returns Bb for a Gb harp in fifth pozition', () => {
  const { Gb: harpKeyId } = PitchIds
  const { Fifth: pozitionId } = PozitionIds

  const { Bb: expectedRootPitchId } = PitchIds
  const actualRootPitchId = getRootPitchId({harpKeyId, pozitionId})

  expect(actualRootPitchId).toBe(expectedRootPitchId)
})
