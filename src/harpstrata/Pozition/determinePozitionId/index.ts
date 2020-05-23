import { getOrderedPozitionIds } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'
import { getOrderedPitchIds } from '../../Pitch'
import type { PitchIds } from '../../Pitch'

type DeterminePozitionIdProps = {
  readonly rootPitchId: PitchIds;
  readonly harpKeyId: PitchIds;
}

export const determinePozitionId = (props: DeterminePozitionIdProps): PozitionIds => {
  const { rootPitchId, harpKeyId } = props

  const harpKeyOrderedPitchIds = getOrderedPitchIds(harpKeyId)

  const rootPitchIndex = harpKeyOrderedPitchIds.indexOf(rootPitchId)

  const { [rootPitchIndex]: pozitionId } = getOrderedPozitionIds()

  return pozitionId
}
