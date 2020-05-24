import type { PitchIds, PitchMatrix } from '../types'
import { getAscendingPitchIds, getPitch } from '../pitchMap'
import type { HalfstepIndexMatrix } from '../../Apparatus'

export const getPitchMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, keyPitchId: PitchIds): PitchMatrix => {

  const ascPitchIdsInKey = getAscendingPitchIds(keyPitchId)

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return getPitch(ascPitchIdsInKey[halfstepIndex % 12])
    })
  })
}
