import type { OrderedIdsProps } from '../types'
import { isForDegrees, isForPitches, isForPozitions } from '../typeguards'
import { getAscendingPozitionIds } from '../getOrderedPozitionIds'
import { getAscendingPitchIds } from '../getOrderedPitchIds'
import { getAscendingDegreeIds } from '../getOrderedDegreeIds'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

export const getAscendingIds = (props: OrderedIdsProps): ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds> | ReadonlyArray<PozitionIds> => {
  if ( isForDegrees(props) ) {
    const {origin} = props
    return getAscendingDegreeIds(origin)
  } else if ( isForPitches(props) ) {
    const {origin} = props
    return getAscendingPitchIds(origin)
  } else if ( isForPozitions(props) ) {
    const {origin} = props
    return getAscendingPozitionIds(origin)
  }

  const errorMessage = `
    Input args did not meet expectations.

    Most likely the 'type' property is not set to one of the legitimate Orderables type.

    Input: ${JSON.stringify(props)}
  `
  throw new Error(errorMessage)
}
