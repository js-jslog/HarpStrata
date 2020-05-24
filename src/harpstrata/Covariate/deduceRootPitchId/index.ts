import { RootPitchControlVars } from '../types'
import { getPozitionRootOffset } from '../../Pozition'
import type { PitchIds } from '../../Pitch'
import { getOrderedPitchIds } from '../../Pitch'


export const deduceRootPitchId = (props: RootPitchControlVars): PitchIds => {
  const { harpKeyId, pozitionId } = props
  const rootOffset = getPozitionRootOffset(pozitionId)

  const ascPitchIdsInKey = getOrderedPitchIds(harpKeyId)

  const { [rootOffset]: rootPitchId } = ascPitchIdsInKey

  return rootPitchId
}
