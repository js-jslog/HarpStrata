import { PitchIds } from '../types'
import type { Pitch } from '../types'

import { getOrderedPitchIds, getPitch } from './index'


test('getOrderedPitchIds function returns an ordered array of the available pitches defaulting to starting at C', () => {
  const expectedArray = [
    PitchIds.C, PitchIds.Db, PitchIds.D, PitchIds.Eb, PitchIds.E, PitchIds.F,
    PitchIds.Gb, PitchIds.G, PitchIds.Ab, PitchIds.A, PitchIds.Bb, PitchIds.B
  ]
  const actualArray = getOrderedPitchIds()

  expect(actualArray).toEqual(expectedArray)
})

test('getPitch function can return a first pozition', () => {
  const C_PITCH: Pitch = { id: PitchIds.C } as const
  const actualPitch = getPitch(C_PITCH.id)

  expect(actualPitch).toStrictEqual(C_PITCH)
})
