import type { HalfstepIndexMatrix, HalfstepIndex } from '../types'

import type { DegreeMatrix } from './types'
import { ORDERED_DEGREES } from './constants'


export const getDegreeMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, root: HalfstepIndex): DegreeMatrix => {
  const arrayHead = [ ...ORDERED_DEGREES.slice(-1 * root) ]
  const arrayTail = [ ...ORDERED_DEGREES.slice(0, (-1 * root)) ]
  const alignedDegreeIds = [ ...arrayHead, ...arrayTail ]

  return halfstepIndexMatrix.map((halfstepIndexRow) => {
    return halfstepIndexRow.map((halfstepIndex) => {
      if (halfstepIndex === undefined) return undefined
      return alignedDegreeIds[halfstepIndex % 12]
    })
  })
}

export type { Degree, DegreeRow, DegreeMatrix } from './types'
export { DegreeIds } from './types'
export { ROOT, FLAT2, SECOND, FLAT3, THIRD, FOURTH, FLAT5, FIFTH, FLAT6, SIXTH, FLAT7, SEVENTH } from './constants'
