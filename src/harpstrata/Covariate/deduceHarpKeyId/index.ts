import { getPozitionRootOffset } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'
import { getOrderedPitchIds } from '../../Pitch'
import type { PitchIds } from '../../Pitch'


export type DeduceKeyPitchProps = {
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const deduceHarpKeyId = (props: DeduceKeyPitchProps): PitchIds => {
  const { rootPitchId, pozitionId } = props
  const rootOffset = getPozitionRootOffset(pozitionId)

  const [ , ...ascendingPitchIds ] = getOrderedPitchIds(rootPitchId)
  const descendingPitchIdsFromRoot = [ rootPitchId, ...ascendingPitchIds.reverse() ]

  const { [rootOffset]: harpKeyId } = descendingPitchIdsFromRoot

  return harpKeyId
}
