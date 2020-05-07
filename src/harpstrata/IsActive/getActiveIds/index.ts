import type { IsActiveProps } from '../types'
import { DegreeIds } from '../../Degree'

import { getCounterpartDegreeIds, getCounterpartPitchIds } from './getCounterpartActiveIds'

import { ActiveIdsPair, ActivePitchIds, ActiveDegreeIds } from './types'

export const getActiveIds = (props: IsActiveProps): ActiveIdsPair => {
  const { activeElementIds } = props
  if (activeElementIds[0] in Object.values(DegreeIds)) {
    const activeDegreeIds = [ ...activeElementIds as ActiveDegreeIds ].sort()
    const activePitchIds = [ ...getCounterpartPitchIds(props) ].sort()
    return { activeDegreeIds, activePitchIds }
  }
  const activePitchIds = [ ...activeElementIds as ActivePitchIds ].sort()
  const activeDegreeIds = [ ...getCounterpartDegreeIds(props) ].sort()
  return { activeDegreeIds, activePitchIds }
}
