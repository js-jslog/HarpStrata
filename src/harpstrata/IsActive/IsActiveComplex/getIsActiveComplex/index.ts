import type { IsActiveProps, IsActiveComplex } from '../../types'
import { getIsActiveMatrix } from '../../IsActiveMatrix'
import { getActiveIdsPair } from '../../ActiveIds'

export const getIsActiveComplex = (isActiveProps: IsActiveProps): IsActiveComplex => {
  return {
    isActiveMatrix: getIsActiveMatrix(isActiveProps),
    ...getActiveIdsPair(isActiveProps),
  }
}
