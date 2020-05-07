import type { IsActiveProps, IsActiveMatrix } from '../types'
import { DegreeIds } from '../../Degree'

import { getMatrixGivenDegree, getMatrixGivenPitch } from './getIsActiveMatrixForSpecificType'

export const getIsActiveMatrix = (props: IsActiveProps): IsActiveMatrix => {
  const { activeElementIds } = props
  if (activeElementIds[0] in Object.values(DegreeIds)) {
    return getMatrixGivenDegree(props)
  }
  return getMatrixGivenPitch(props)
}
