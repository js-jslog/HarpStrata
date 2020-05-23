import { PitchIds } from '../types'
import type { Pitch } from '../types'

import { getOrderedPitchIds, getPitch } from './index'


test('getOrderedPitchIds function returns an array of the available pitches', () => {
  const expectedIncludes = [ PitchIds.C, PitchIds.Db ]
  const actualArray = getOrderedPitchIds()

  expect(actualArray).toEqual(expect.arrayContaining(expectedIncludes))
})

test('getPitch function can return a first pozition', () => {
  const C_PITCH: Pitch = { id: PitchIds.C } as const
  const actualPitch = getPitch(C_PITCH.id)

  expect(actualPitch).toStrictEqual(C_PITCH)
})
