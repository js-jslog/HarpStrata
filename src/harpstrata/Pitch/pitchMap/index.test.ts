import { PitchIds } from '../types'
import type { Pitch } from '../types'

import { getAscendingPitchIds, getPitch } from './index'


test('getAscendingPitchIds function returns an ordered array of the available pitches defaulting to starting at C', () => {
  const expectedArray = [
    PitchIds.C, PitchIds.Db, PitchIds.D, PitchIds.Eb, PitchIds.E, PitchIds.F,
    PitchIds.Gb, PitchIds.G, PitchIds.Ab, PitchIds.A, PitchIds.Bb, PitchIds.B
  ]
  const actualArray = getAscendingPitchIds()

  expect(actualArray).toEqual(expectedArray)
})

test('getAscendingPitchIds function returns an ordered array of the available pitches starting from an input value', () => {
  const expectedArray = [
    PitchIds.Gb, PitchIds.G, PitchIds.Ab, PitchIds.A, PitchIds.Bb, PitchIds.B,
    PitchIds.C, PitchIds.Db, PitchIds.D, PitchIds.Eb, PitchIds.E, PitchIds.F
  ]
  const actualArray = getAscendingPitchIds(PitchIds.Gb)

  expect(actualArray).toEqual(expectedArray)
})

test('getPitch function can return a first pozition', () => {
  const C_PITCH: Pitch = { id: PitchIds.C } as const
  const actualPitch = getPitch(C_PITCH.id)

  expect(actualPitch).toStrictEqual(C_PITCH)
})
