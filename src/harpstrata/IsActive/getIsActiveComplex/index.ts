import type { IsActiveProps, IsActiveComplex } from '../types'
import { getIsActiveMatrix } from '../getIsActiveMatrix'
import { getActiveIdsPair } from '../getActiveIdsPair'

export const getIsActiveComplex = (isActiveProps: IsActiveProps): IsActiveComplex => {
  return {
    isActiveMatrix: getIsActiveMatrix(isActiveProps),
    ...getActiveIdsPair(isActiveProps),
  }
}
