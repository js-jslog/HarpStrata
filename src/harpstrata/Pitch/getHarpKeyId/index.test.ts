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

test('getHarpKeyId returns C for a G root in second pozition', () => {
  const { G: rootPitchId } = PitchIds
  const { Second: pozitionId } = PozitionIds

  const { C: expectedHarpKeyId } = PitchIds
  const actualHarpKeyId = getHarpKeyId({rootPitchId, pozitionId})

  expect(actualHarpKeyId).toBe(expectedHarpKeyId)
})

test('getHarpKeyId returns D for an Eb root in eighth pozition', () => {
  const { Eb: rootPitchId } = PitchIds
  const { Eighth: pozitionId } = PozitionIds

  const { D: expectedHarpKeyId } = PitchIds
  const actualHarpKeyId = getHarpKeyId({rootPitchId, pozitionId})

  expect(actualHarpKeyId).toBe(expectedHarpKeyId)
})
