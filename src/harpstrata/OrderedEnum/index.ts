import { DegreeIds } from '../Degree'

import { getAscendingEnumValues } from './OrderedEnumValues'

export const getAscendingDegreeIds = (origin: DegreeIds): ReadonlyArray<DegreeIds> => {
  return getAscendingEnumValues(DegreeIds, origin)
}
