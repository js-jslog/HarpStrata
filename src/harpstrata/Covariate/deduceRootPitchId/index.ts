import { getPozitionRootOffset } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'
import type { PitchIds } from '../../Pitch'
import { getOrderedPitchIds } from '../../Pitch'

export type DeduceRootPitchProps = {
  readonly harpKeyId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const deduceRootPitchId = (props: DeduceRootPitchProps): PitchIds => {
  const { harpKeyId, pozitionId } = props
  const rootOffset = getPozitionRootOffset(pozitionId)

  const ascPitchIdsInKey = getOrderedPitchIds(harpKeyId)

  const { [rootOffset]: rootPitchId } = ascPitchIdsInKey

  return rootPitchId
}
