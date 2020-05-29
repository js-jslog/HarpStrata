import type { Pitch } from '../types'
import { PitchIds } from '../types'

export const getPitch = (pitchId: PitchIds): Pitch => ({ id: pitchId })
