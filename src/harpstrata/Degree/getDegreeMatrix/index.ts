import type { DegreeMatrix, DegreeIds } from '../types'
import { getDegree } from '../getDegree'
import { getAscendingDegreeIds } from '../../OrderedIds'
import type { HalfstepIndexMatrix } from '../../Apparatus'


export const getDegreeMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, rootDegreeId: DegreeIds): DegreeMatrix => {

  const ascendingDegreeIdsFromHarpRoot = getAscendingDegreeIds(rootDegreeId)

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return getDegree(ascendingDegreeIdsFromHarpRoot[halfstepIndex % 12])
    })
  })
}
