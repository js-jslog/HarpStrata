import { ORDERED_POZITIONS } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'
import { ORDERED_PITCHES } from '../../Pitch'
import type { PitchIds } from '../../Pitch'

type DeterminePozitionIdProps = {
  readonly rootPitchId: PitchIds;
  readonly harpKeyId: PitchIds;
}

export const determinePozitionId = (props: DeterminePozitionIdProps): PozitionIds => {
  const { rootPitchId, harpKeyId } = props
  const orderedPitchIds = ORDERED_PITCHES.map(pitch => pitch.id)
  const harpKeyIndex = orderedPitchIds.indexOf(harpKeyId)
  const arrayHead = [ ...orderedPitchIds.slice(harpKeyIndex) ]
  const arrayTail = [ ...orderedPitchIds.slice(0, (harpKeyIndex)) ]
  const alignedPitchIds = [ ...arrayHead, ...arrayTail ]

  const rootPitchIndex = alignedPitchIds.indexOf(rootPitchId)

  const { [rootPitchIndex]: pozition } = ORDERED_POZITIONS

  return pozition.id
}
