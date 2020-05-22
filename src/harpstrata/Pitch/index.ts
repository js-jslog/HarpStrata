import { pitchMap } from './pitchMap'

import type { PitchIds, Pitch } from './types'

export const getActivePitchIds = (): PitchIds[] => Array.from(pitchMap.keys())
export const getPitch = (pitchId: PitchIds): Pitch => pitchMap.get(pitchId)

export { getPitchMatrix } from './getPitchMatrix'

export type { Pitch, PitchRow, PitchMatrix } from './types'
export { PitchIds } from './types'
export { A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab } from './constants'

export { EXAMPLE_PITCH_MATRICES } from './testResources'
