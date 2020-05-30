import { getAscendingDegreeIds } from '../getOrderedDegreeIds'
import { DegreeIds } from '../../Degree'

export const getAscendingIds = (): ReadonlyArray<DegreeIds> => {
  return getAscendingDegreeIds()
}
