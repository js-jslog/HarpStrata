import { HalfstepIndexMatrix, HalfstepIndex } from '../Apparatus/HalfstepIndex/types'

import { DegreeMatrix } from './types'
import { ORDERED_DEGREES } from './constants'


export const getDegreeMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, root: HalfstepIndex): DegreeMatrix => {
  const shiftedDegreeIds = ORDERED_DEGREES.slice(-1 * root).concat(ORDERED_DEGREES.slice(0, (-1 * root)))

  return halfstepIndexMatrix.map((row) => {
    return row.map((element) => {
      if (element === undefined) {
        return undefined
      } else {
        return shiftedDegreeIds[element % 12]
      }
    })
  })
}
