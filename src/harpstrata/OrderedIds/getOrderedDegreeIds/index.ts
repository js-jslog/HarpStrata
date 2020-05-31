import { DegreeIds } from '../../Degree'

export const getAscendingDegreeIds = (originId: DegreeIds = DegreeIds.Root): ReadonlyArray<DegreeIds> => {
  const ascendingDegreeIds = Object.values(DegreeIds)

  const originIndex = ascendingDegreeIds.indexOf(originId)

  const head = [ ...ascendingDegreeIds.slice(originIndex) ]
  const tail = [ ...ascendingDegreeIds.slice(0, (originIndex)) ]

  return [ ...head, ...tail ]
}
