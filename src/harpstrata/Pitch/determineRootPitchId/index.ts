import type { PitchIds } from '../types'
import { getOrderedPitchIds } from '../pitchMap'
import { getPozition } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'

type DetermineRootPitchProps = {
  readonly harpKeyId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const determineRootPitchId = (props: DetermineRootPitchProps): PitchIds => {
  const { harpKeyId, pozitionId } = props
  const pozition = getPozition(pozitionId)
  const { root: rootOffset } = pozition

  const ascPitchIdsInKey = getOrderedPitchIds(harpKeyId)

  const { [rootOffset]: rootPitchId } = ascPitchIdsInKey

  return rootPitchId
}
