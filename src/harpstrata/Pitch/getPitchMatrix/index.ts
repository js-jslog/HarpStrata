import type { PitchIds, PitchMatrix } from '../types'
import { ORDERED_PITCHES } from '../constants'
import type { HalfstepIndexMatrix } from '../../Apparatus'

export const getPitchMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, keyPitchId: PitchIds): PitchMatrix => {
  const orderedPitchIds = ORDERED_PITCHES.map(pitch => pitch.id)
  const pitchIndex = orderedPitchIds.indexOf(keyPitchId)
  const arrayHead = [ ...ORDERED_PITCHES.slice(pitchIndex) ]
  const arrayTail = [ ...ORDERED_PITCHES.slice(0, (pitchIndex)) ]
  const alignedPitchIds = [ ...arrayHead, ...arrayTail ]

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return alignedPitchIds[halfstepIndex % 12]
    })
  })
}
