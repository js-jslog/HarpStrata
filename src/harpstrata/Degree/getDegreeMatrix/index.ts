import type { DegreeMatrix } from '../types'
import { DegreeIds } from '../types'
import { getDegree, getAscendingDegreeIds } from '../degreeMap'
import type { HalfstepIndexMatrix, HalfstepIndex } from '../../Apparatus'


export const getDegreeMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, root: HalfstepIndex): DegreeMatrix => {
  const [ , ...restOrderedDegreeIds ] = getAscendingDegreeIds()
  const reversedRest = [ ...restOrderedDegreeIds ].reverse()
  const { [root]: rootDegreeId } = [ DegreeIds.Root, ...reversedRest ]
  const shiftedOrderedDegreeIds = getAscendingDegreeIds(rootDegreeId)

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return getDegree(shiftedOrderedDegreeIds[halfstepIndex % 12])
    })
  })
}
