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

test('determinePozitionId returns Second for a G root on a C harp', () => {
  const { G: rootPitchId } = PitchIds
  const { C: harpKeyId } = PitchIds

  const { Second: expectedPozitionId } = PozitionIds
  const actualPozitionId = determinePozitionId({ rootPitchId, harpKeyId })

  expect(actualPozitionId).toBe(expectedPozitionId)
})

test('determinePozitionId returns Ninth for a Eb root on a G harp', () => {
  const { Eb: rootPitchId } = PitchIds
  const { G: harpKeyId } = PitchIds

  const { Ninth: expectedPozitionId } = PozitionIds
  const actualPozitionId = determinePozitionId({ rootPitchId, harpKeyId })

  expect(actualPozitionId).toBe(expectedPozitionId)
})
