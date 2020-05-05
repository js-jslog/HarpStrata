import { SiblingDisplayMatrices, IsActiveMatrix } from '../types'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

import { getIsActiveMatrixForDegrees, getIsActiveMatrixForPitches } from './getIsActiveMatrixForSpecificType'

export const getIsActiveMatrix = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds>): IsActiveMatrix => {
  if (activeElementIds[0] in Object.values(DegreeIds)) {
    const activeDegreeIds = activeElementIds as ReadonlyArray<DegreeIds>
    return getIsActiveMatrixForDegrees(siblingDisplayMatrices, activeDegreeIds)
  }
  const activePitchIds = activeElementIds as ReadonlyArray<PitchIds>
  return getIsActiveMatrixForPitches(siblingDisplayMatrices, activePitchIds)
}
