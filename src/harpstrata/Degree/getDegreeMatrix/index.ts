import type { DegreeMatrix } from '../types'
import { getDegree } from '../getDegree'
import { Orderables, getAscendingIds, getDescendingIds } from '../../OrderedIds'
import type { OrderedDegreeIdsProps } from '../../OrderedIds'
import type { DegreeIds } from '../../Degree'
import type { HalfstepIndexMatrix, HalfstepIndex } from '../../Apparatus'


export const getDegreeMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, root: HalfstepIndex): DegreeMatrix => {
  const orderedDegreeIdsProps: OrderedDegreeIdsProps = { type: Orderables.Degree }
  const { [root]: rootDegreeId } = getDescendingIds(orderedDegreeIdsProps) as ReadonlyArray<DegreeIds>
  const orderedDegreeIdsPropsFromOrigin: OrderedDegreeIdsProps = {
    ...orderedDegreeIdsProps,
    origin: rootDegreeId,
  }
  const ascendingDegreeIdsFromHarpRoot = getAscendingIds(orderedDegreeIdsPropsFromOrigin) as ReadonlyArray<DegreeIds>

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return getDegree(ascendingDegreeIdsFromHarpRoot[halfstepIndex % 12])
    })
  })
}
