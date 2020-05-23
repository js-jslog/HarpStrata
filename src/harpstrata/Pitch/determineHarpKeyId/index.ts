import type { PitchIds } from '../types'
import { getOrderedPitchIds } from '../pitchMap'
import { getPozition } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'


type DetermineKeyPitchProps = {
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const determineHarpKeyId = (props: DetermineKeyPitchProps): PitchIds => {
  const { rootPitchId, pozitionId } = props
  const pozition = getPozition(pozitionId)
  const { root: rootOffset } = pozition

  const [ , ...ascendingPitchIds ] = getOrderedPitchIds(rootPitchId)
  const descendingPitchIdsFromRoot = [ rootPitchId, ...ascendingPitchIds.reverse() ]

  const { [rootOffset]: harpKeyId } = descendingPitchIdsFromRoot

  return harpKeyId
}
