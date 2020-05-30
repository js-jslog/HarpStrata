import { Orderables } from '../types'
import type { OrderedIdsProps } from '../types'
import { getAscendingPozitionIds } from '../getOrderedPozitionIds'
import { getAscendingPitchIds } from '../getOrderedPitchIds'
import { getAscendingDegreeIds } from '../getOrderedDegreeIds'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

export const getAscendingIds = (props: OrderedIdsProps): ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds> | ReadonlyArray<PozitionIds> => {
  const { type, origin } = props
  if ( type === Orderables.Degree ) {
    return getAscendingDegreeIds(origin as DegreeIds)
  } else if ( type === Orderables.Pitch ) {
    return getAscendingPitchIds()
  } else if ( type === Orderables.Pozition ) {
    return getAscendingPozitionIds()
  }

  const errorMessage = `
    Input args did not meet expectations.

    Most likely the 'type' property is not set to one of the legitimate Orderables type.

    Input: ${JSON.stringify(props)}
  `
  throw new Error(errorMessage)
}
