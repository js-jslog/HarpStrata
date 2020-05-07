import type { IsActiveProps } from '../types'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

import { getCounterpartDegreeIds, getCounterpartPitchIds } from './getCounterpartActiveIds'

interface ActiveIds {
  activeDegreeIds: ReadonlyArray<DegreeIds>;
  activePitchIds: ReadonlyArray<PitchIds>;
}

export const getActiveIds = (props: IsActiveProps): ActiveIds => {
  const { activeElementIds } = props
  if (activeElementIds[0] in Object.values(DegreeIds)) {
    const activeDegreeIds = activeElementIds as ReadonlyArray<DegreeIds>
    const activePitchIds = [ ...getCounterpartPitchIds(props) ].sort()
    return { activeDegreeIds, activePitchIds }
  }
  const activePitchIds = activeElementIds as ReadonlyArray<PitchIds>
  const activeDegreeIds = [ ...getCounterpartDegreeIds(props) ].sort()
  return { activeDegreeIds, activePitchIds }
}
