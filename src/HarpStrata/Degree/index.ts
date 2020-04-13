import { HalfstepIndexMatrix, HalfstepIndex } from '../Apparatus/HalfstepIndex/types'

import { DegreeMatrix } from './types'
import { ORDERED_DEGREES } from './constants'


export const getDegreeMatrix = (halfstepIndexMatrix: HalfstepIndexMatrix, root: HalfstepIndex): DegreeMatrix => {
  const shiftedDegreeIds = [ ...ORDERED_DEGREES ]

  for (let i = 0; i < root; i++) {
    // TODO: there must be a better way to achieve this
    const poppedDegreeIds = shiftedDegreeIds.pop()
    if (poppedDegreeIds) shiftedDegreeIds.unshift(poppedDegreeIds)
  }

  return halfstepIndexMatrix.map((row) => {
    return row.map((element) => {
      return (element ? shiftedDegreeIds[element % 12] : undefined)
    })
  })
}
