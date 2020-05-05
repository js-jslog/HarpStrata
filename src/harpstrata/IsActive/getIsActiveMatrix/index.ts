import type { IsActiveProps, IsActiveMatrix } from '../types'
import { DegreeIds } from '../../Degree'

import { getIsActiveMatrixForDegrees, getIsActiveMatrixForPitches } from './getIsActiveMatrixForSpecificType'

export const getIsActiveMatrix = (props: IsActiveProps): IsActiveMatrix => {
  const { activeElementIds } = props
  if (activeElementIds[0] in Object.values(DegreeIds)) {
    return getIsActiveMatrixForDegrees(props)
  }
  return getIsActiveMatrixForPitches(props)
}
