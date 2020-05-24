import type { PitchIds } from '../types'
import { getOrderedPitchIds } from '../pitchMap'
import { getPozitionRootOffset } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'

type DeduceRootPitchProps = {
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
