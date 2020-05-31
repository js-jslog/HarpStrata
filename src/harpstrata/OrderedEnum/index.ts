import { DegreeIds } from '../Degree'

import { getAscendingEnumValues, getDescendingEnumValues } from './OrderedEnumValues'

export const getAscendingDegreeIds = (origin: DegreeIds): ReadonlyArray<DegreeIds> => {
  return getAscendingEnumValues(DegreeIds, origin)
}

export const getDescendingDegreeIds = (origin: DegreeIds): ReadonlyArray<DegreeIds> => {
  return getDescendingEnumValues(DegreeIds, origin)
}
