import { ORDERED_DEGREES } from './constants'

import { DegreeMatrix } from './types'

export const getDegreeMatrix = (halfstepMatrix, offset): DegreeMatrix => {
  const shiftedDegreeIds = [ ...ORDERED_DEGREES ]

  for (let i = 0; i < offset; i++) {
    shiftedDegreeIds.unshift(shiftedDegreeIds.pop())
  }

  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return shiftedDegreeIds[element % 12]
    })
  })
}
