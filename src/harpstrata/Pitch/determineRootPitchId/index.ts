import type { PitchIds } from '../types'
import { ORDERED_PITCHES } from '../constants'
import { getPozition } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'

type DetermineRootPitchProps = {
  readonly harpKeyId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const determineRootPitchId = (props: DetermineRootPitchProps): PitchIds => {
  const { harpKeyId, pozitionId } = props
  const pozition = getPozition(pozitionId)
  const { root: rootOffset } = pozition

  const orderedPitchIds = ORDERED_PITCHES.map(pitch => pitch.id)
  const pitchIndex = orderedPitchIds.indexOf(harpKeyId)
  const arrayHead = [ ...orderedPitchIds.slice(pitchIndex) ]
  const arrayTail = [ ...orderedPitchIds.slice(0, (pitchIndex)) ]
  const alignedPitchIds = [ ...arrayHead, ...arrayTail ]

  const { [rootOffset]: rootPitchId } = alignedPitchIds

  return rootPitchId
}
