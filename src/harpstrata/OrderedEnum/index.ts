import { DegreeIds } from '../Degree'

export const getOrderedEnum = (enumerator: Record<string, DegreeIds>): ReadonlyArray<DegreeIds> => {
  return Object.values(enumerator)
}
