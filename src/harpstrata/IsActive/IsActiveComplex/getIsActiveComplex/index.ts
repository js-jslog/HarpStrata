import { getIsActiveMatrix } from '../getIsActiveMatrix'
import { getActiveIdsPair } from '../getActiveIdsPair'
import type { IsActiveProps, IsActiveComplex } from '../../types'

export const getIsActiveComplex = (isActiveProps: IsActiveProps): IsActiveComplex => {
  return {
    isActiveMatrix: getIsActiveMatrix(isActiveProps),
    ...getActiveIdsPair(isActiveProps),
  }
}
