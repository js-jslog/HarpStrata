import { DegreeIds } from '../Degree'

type OrderedDegreeProps = {
  readonly enumeration: Record<string, DegreeIds>;
}
export const getOrderedEnum = (props: OrderedDegreeProps): ReadonlyArray<DegreeIds> => {
  return Object.values(props.enumeration)
}
