import { HarpKeyControlVars } from '../types'
import type { PitchIds } from '../../Pitch'
import { getPozitionRootOffset } from '../../OrderedIds'
import { getDescendingPitchIds } from '../../OrderedIds'


export const deduceHarpKeyId = (props: HarpKeyControlVars): PitchIds => {
  const { rootPitchId, pozitionId } = props
  const rootOffset = getPozitionRootOffset(pozitionId)

  const descendingPitchIds = getDescendingPitchIds(rootPitchId)

  const { [rootOffset]: harpKeyId } = descendingPitchIds

  return harpKeyId
}
