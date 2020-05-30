import { Orderables } from '../types'
import type { OrderedIdsProps } from '../types'
import { getAscendingPitchIds } from '../getOrderedPitchIds'
import { getAscendingDegreeIds } from '../getOrderedDegreeIds'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

export const getAscendingIds = (props: OrderedIdsProps): ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds> => {
  const { type } = props
  if ( type === Orderables.Degree ) {
    return getAscendingDegreeIds()
  } else if ( type === Orderables.Pitch ) {
    return getAscendingPitchIds()
  }

  throw new Error('Function not set up to handle Pozition types yet')
}
