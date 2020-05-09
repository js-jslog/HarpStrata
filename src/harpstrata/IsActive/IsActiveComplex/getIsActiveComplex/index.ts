import { getActiveIdsPair } from '../getActiveIdsPair'
import type { IsActiveProps, IsActiveComplex } from '../../types'
import { getIsActiveMatrix } from '../../IsActiveMatrix'

export const getIsActiveComplex = (isActiveProps: IsActiveProps): IsActiveComplex => {
  return {
    isActiveMatrix: getIsActiveMatrix(isActiveProps),
    ...getActiveIdsPair(isActiveProps),
  }
}
