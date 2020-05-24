import { PozitionControlVars } from '../types'
import { getOrderedPozitionIds } from '../../Pozition'
import type { PozitionIds } from '../../Pozition'
import { getOrderedPitchIds } from '../../Pitch'


export const deducePozitionId = (props: PozitionControlVars): PozitionIds => {
  const { rootPitchId, harpKeyId } = props

  const harpKeyOrderedPitchIds = getOrderedPitchIds(harpKeyId)

  const rootPitchIndex = harpKeyOrderedPitchIds.indexOf(rootPitchId)

  const { [rootPitchIndex]: pozitionId } = getOrderedPozitionIds()

  return pozitionId
}
