import type { PitchIds } from '../types'
import { ORDERED_PITCHES } from '../constants'
import { getPozition } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'

type GetKeyPitchProps = {
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const getHarpKeyId = (props: GetKeyPitchProps): PitchIds => {
  const { rootPitchId, pozitionId } = props
  const pozition = getPozition(pozitionId)
  const { root: rootOffset } = pozition

  const reverseOrderedPitchIds = ORDERED_PITCHES.map(pitch => pitch.id).reverse()
  const pitchIndex = reverseOrderedPitchIds.indexOf(rootPitchId)
  const arrayHead = [ ...reverseOrderedPitchIds.slice(pitchIndex) ]
  const arrayTail = [ ...reverseOrderedPitchIds.slice(0, (pitchIndex)) ]
  const alignedPitchIds = [ ...arrayHead, ...arrayTail ]

  const { [rootOffset]: harpKeyId } = alignedPitchIds

  return harpKeyId
}
