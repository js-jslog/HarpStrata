import type { PitchIds } from '../types'
import { getOrderedPitchIds } from '../pitchMap'
import { getOrderedPozitionIds } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'


type DetermineKeyPitchProps = {
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const determineHarpKeyId = (props: DetermineKeyPitchProps): PitchIds => {
  const { rootPitchId, pozitionId } = props
  const rootOffset = getOrderedPozitionIds().indexOf(pozitionId)

  const [ , ...ascendingPitchIds ] = getOrderedPitchIds(rootPitchId)
  const descendingPitchIdsFromRoot = [ rootPitchId, ...ascendingPitchIds.reverse() ]

  const { [rootOffset]: harpKeyId } = descendingPitchIdsFromRoot

  return harpKeyId
}
