import type { PitchIds, PitchMatrix } from '../types'
import { getPitch } from '../Pitch'
import { getAscendingPitchIds } from '../../OrderedIds'
import type { HalfstepIndexMatrix } from '../../Apparatus'

export const getPitchMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, keyPitchId: PitchIds): PitchMatrix => {

  const ascendingPitchIdsInKey = getAscendingPitchIds(keyPitchId)

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return getPitch(ascendingPitchIdsInKey[halfstepIndex % 12])
    })
  })
}
