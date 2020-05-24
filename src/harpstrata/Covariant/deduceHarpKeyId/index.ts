import { HarpKeyControlVars } from '../types'
import { getPozitionRootOffset } from '../../Pozition'
import { getAscendingPitchIds } from '../../Pitch'
import type { PitchIds } from '../../Pitch'


export const deduceHarpKeyId = (props: HarpKeyControlVars): PitchIds => {
  const { rootPitchId, pozitionId } = props
  const rootOffset = getPozitionRootOffset(pozitionId)

  const [ , ...ascendingPitchIds ] = getAscendingPitchIds(rootPitchId)
  const descendingPitchIdsFromRoot = [ rootPitchId, ...ascendingPitchIds.reverse() ]

  const { [rootOffset]: harpKeyId } = descendingPitchIdsFromRoot

  return harpKeyId
}
