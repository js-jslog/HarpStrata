import { Orderables } from '../types'
import type { OrderedDegreeIdsProps, OrderedPitchIdsProps, OrderedPozitionIdsProps, OrderedIdsProps } from '../types'

export const isForDegrees = (props: OrderedIdsProps): props is OrderedDegreeIdsProps => {
  const { type } = props
  return ( type === Orderables.Degree )
}

export const isForPitches = (props: OrderedIdsProps): props is OrderedPitchIdsProps => {
  const { type } = props
  return ( type === Orderables.Pitch )
}

export const isForPozitions = (props: OrderedIdsProps): props is OrderedPozitionIdsProps => {
  const { type } = props
  return ( type === Orderables.Pozition )
}
