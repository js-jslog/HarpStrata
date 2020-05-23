import type { PitchIds } from '../types'
import { getOrderedPitchIds } from '../pitchMap'
import { getOrderedPozitionIds } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'

type DetermineRootPitchProps = {
  readonly harpKeyId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const determineRootPitchId = (props: DetermineRootPitchProps): PitchIds => {
  const { harpKeyId, pozitionId } = props
  const rootOffset = getOrderedPozitionIds().indexOf(pozitionId)

  const ascPitchIdsInKey = getOrderedPitchIds(harpKeyId)

  const { [rootOffset]: rootPitchId } = ascPitchIdsInKey

  return rootPitchId
}
