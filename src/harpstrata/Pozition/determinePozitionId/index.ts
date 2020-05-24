import { getOrderedPozitionIds } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'
import { getOrderedPitchIds } from '../../Pitch'
import type { PitchIds } from '../../Pitch'

type DeducePozitionIdProps = {
  readonly rootPitchId: PitchIds;
  readonly harpKeyId: PitchIds;
}

export const deducePozitionId = (props: DeducePozitionIdProps): PozitionIds => {
  const { rootPitchId, harpKeyId } = props

  const harpKeyOrderedPitchIds = getOrderedPitchIds(harpKeyId)

  const rootPitchIndex = harpKeyOrderedPitchIds.indexOf(rootPitchId)

  const { [rootPitchIndex]: pozitionId } = getOrderedPozitionIds()

  return pozitionId
}
