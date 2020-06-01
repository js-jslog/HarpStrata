import { getAscendingEnumValues } from '../OrderedIds'
import type { HalfstepIndexMatrix } from '../Apparatus'

export const mapHalfstepMatrix = <T>(halfstepsMatrix: HalfstepIndexMatrix, enumerator: Record<string, T>, origin: T, objGetter: (arg: T) => ({id: T})): ReadonlyArray<ReadonlyArray<{id: T} | undefined>> => {
  const ascendingFromOrigin = getAscendingEnumValues(enumerator, origin)

  return halfstepsMatrix.map((halfstepsRow) => {
    return halfstepsRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return objGetter(ascendingFromOrigin[halfstepIndex % 12])
    })
  })
}
